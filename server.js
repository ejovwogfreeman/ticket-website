const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

const port = process.env.PORT || 5000;

// const express = require("express");
const mongoose = require("mongoose");
const gridfs = require("gridfs-stream");

// const router = express.Router();

const conn = mongoose.connection;
let gfs;

conn.once("open", () => {
  gfs = gridfs(conn.db, mongoose.mongo);
});

app.get("/file/:filename", async (req, res) => {
  try {
    if (!gfs) {
      return res.status(500).json({ error: "GridFS is not initialized" });
    }

    const file = await gfs.files.findOne({ filename: req.params.filename });
    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    const readStream = gfs.createReadStream({ filename: req.params.filename });
    readStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving file" });
  }
});

// module.exports = router;

// app.use("/api/files/", require("./routes/fileRoutes"));
app.use("/api/auth/", require("./routes/authRoutes"));
app.use("/api/users/", require("./routes/userRoutes"));
app.use("/api/ticket/", require("./routes/ticketRoutes"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
