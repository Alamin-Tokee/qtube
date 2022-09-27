const mongoose = require("mongoose");
const { Video } = require("../models/Video");
const userModel = require("../models/User");

// Create new video
const createVideo = async (req, res) => {
  const newVideo = new Video(req.body);

  try {
    await newVideo.save();
    res.status(200).json(newVideo);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get a video

const getVideo = async (req, res) => {
  const id = req.params.id;

  try {
    const video = await Video.findById(id);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update a video
const updateVideo = async (req, res) => {
  const videoId = req.params.id;
  const userId = req.body;

  try {
    const video = await Video.findById(videoId);
    if (video.userId === userId) {
      await video.updateVideo({ $set: req.body });
      res.status(200).json("Post updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete a video

const deleteVideo = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await Video.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Like a video

const likeVideo = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  console.log(userId);

  try {
    const video = await Video.findById(id);
    if (!video.likes.includes(userId)) {
      await video.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post Liked");
    } else {
      await video.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post Upliked");
    }
  } catch (error) {
    res.status(5000).json(error);
  }
};

// dislike a video

const dislikeVideo = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  console.log(userId);

  try {
    const video = await Video.findById(id);

    if (!video.dislikes.includes(userId)) {
      await video.updateOne({ $push: { dislikes: userId } });
      res.status(200).json("Post disliked");
    } else {
      await video.updateOne({ $pull: { dislikes: userId } });
      res.status(200).json("Post Withdaw dislike");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all video

const getAllVideo = async (req, res) => {
  // const id = req.params.id;

  // console.log("Here is all video for all");

  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json(error);
  }
};

// const getAllVideo = async (req, res) => {
//   // const videos = await Video.find();
//   // console.log(videos);
//   // console.log("Hello Bangladesh");
//   try {
//     // if (videos.length > 0) {
//     //   // res.status(200).json(videos);
//     // } else {
//     //   res.status(200).json("Document is empty");
//     // }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Video views
const videoViews = async (req, res) => {
  const videoId = req.params.id;
  try {
    const video = await Video.findById(videoId);
    video.views += 1;
    await video.save();
    res.status(200).json(video);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllVideosByUserId = async (req, res) => {
  const yId = req.params.id;
  try {
    const videos = await Video.find({ author: yId });
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Get Timeline Video // Accordint to sucrimes videso
// export const getTimelineVideos = async (req, res) => {
//     const userId = req.params.id;

//     try {
//       const currentUserPosts = await PostModel.find({ userId: userId });
//       const followingPosts = await UserModel.aggregate([
//         {
//           $match: {
//             _id: new mongoose.Types.ObjectId(userId),
//           },
//         },
//         {
//           $lookup: {
//             from: "posts",
//             localField: "followings",
//             foreignField: "userId",
//             as: "followingPosts",
//           },
//         },
//         {
//           $project: {
//             followingPosts: 1,
//             _id: 0,
//           },
//         },
//       ]);

//       res
//         .status(200)
//         .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
//         .sort((a,b)=>{
//             return b.createdAt - a.createdAt;
//         })
//         );
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };

module.exports = {
  createVideo,
  getVideo,
  updateVideo,
  deleteVideo,
  likeVideo,
  dislikeVideo,
  getAllVideo,
  videoViews,
  getAllVideosByUserId,
};
