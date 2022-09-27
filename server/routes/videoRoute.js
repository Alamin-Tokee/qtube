const express = require("express");
const {
  createVideo,
  getVideo,
  updateVideo,
  deleteVideo,
  likeVideo,
  dislikeVideo,
  getAllVideo,
  videoViews,
  getAllVideosByUserId,
} = require("../controllers/videoController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllVideo);
router.get("/yvideo/:id", authMiddleware, getAllVideosByUserId);
router.post("/create", createVideo);
router.get("/:id", getVideo);
router.put("/:id", authMiddleware, updateVideo);
router.delete("/:id", authMiddleware, deleteVideo);
router.put("/:id/like", likeVideo);
router.put("/:id/dislike", dislikeVideo);
router.put("/:id/views", videoViews);

module.exports = router;
