// const express = require("express");
// const mongoose = require("mongoose");
// const gridfs = require("gridfs-stream");

// const router = express.Router();

// const conn = mongoose.connection;
// let gfs;

// conn.once("open", () => {
//   gfs = gridfs(conn.db, mongoose.mongo);
//   gfs.collection("photos");
// });

// router.get("/file/:filename", async (req, res) => {
//   console.log("you hit the file");
//   try {
//     if (!gfs) {
//       return res.status(500).json({ error: "GridFS is not initialized" });
//     }
//     const file = await gfs.files.findOne({ filename: req.params.filename });
//     if (!file) {
//       return res.status(404).json({ error: "File not found" });
//     }
//     res.set("Content-Type", file.contentType);
//     const readStream = gfs.createReadStream({ filename: req.params.filename });
//     readStream.pipe(res);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error retrieving file" });
//   }
// });

// module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const {
  Types: { ObjectId },
} = mongoose; // Import ObjectId from mongoose.Types
const gridfs = require("gridfs-stream");

const router = express.Router();

const conn = mongoose.connection;
let gfs;

conn.once("open", () => {
  gfs = gridfs(conn.db, mongoose.mongo);
  gfs.collection("photos"); // Make sure the collection name matches the bucketName used during upload
});

router.get("/file/:filename", async (req, res) => {
  try {
    if (!gfs) {
      return res.status(500).json({ error: "GridFS is not initialized" });
    }

    const file = await gfs.files.findOne({ filename: req.params.filename });
    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    // Set the appropriate content type based on the file's mime type
    res.set("Content-Type", file.contentType);

    // Create a read stream from GridFS and pipe it to the response
    const readStream = gfs.createReadStream({ _id: ObjectId(file._id) }); // Use mongoose.Types.ObjectId here
    readStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving file" });
  }
});

module.exports = router;
