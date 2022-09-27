const express = require("express");
const router = express.Router();
const multer = require("multer");
const authMiddleware = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/videos");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

router.post("/", authMiddleware, upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File upload successfully");
  } catch (error) {
    console.error(error);
  }
});

// router.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello Bangladesh",
//   });
// });

module.exports = router;
