// const express = require("express");
// const protect = require("../middlewares/authMiddleware");

// const router = express.Router();

// router.get("/file/:filename", async (req, res) => {
//   try {
//     const file = await gfs.files.findOne({ filename: req.params.filename });
//     const readStream = gridFsBucket.openDownloadStream(file._id);
//     readStream.pipe(res);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// });

// module.exports = router;

// const express = require("express");
// const mongoose = require("mongoose");
// const gridfs = require("gridfs-stream");

// const router = express.Router();

// const conn = mongoose.connection;
// let gfs;

// conn.once("open", () => {
//   gfs = gridfs(conn.db, mongoose.mongo);
// });

// router.get("file/:filename", async (req, res) => {
//   try {
//     if (!gfs) {
//       return res.status(500).json({ error: "GridFS is not initialized" });
//     }

//     const file = await gfs.files.findOne({ filename: req.params.filename });
//     if (!file) {
//       return res.status(404).json({ error: "File not found" });
//     }

//     const readStream = gfs.createReadStream({ filename: req.params.filename });
//     readStream.pipe(res);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error retrieving file" });
//   }
// });

// module.exports = router;
