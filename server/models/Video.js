const mongoose = require("mongoose");

const videoSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    filepath: {
      type: String,
      default: "home",
    },
    likes: [],
    dislikes: [],
    category: String,
    views: {
      type: Number,
      default: 0,
    },
    duration: {
      type: String,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = { Video };
