import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideo } from "../../actions/VideoActions";
import { likeVideo, dislikeVideo } from "../../api/VideosRequests";
const REACT_APP_PUBLIC_FOLDER = "http://localhost:5000/videos/";

const VplayerLeft = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.id;
  console.log(id);
  // const { video, loading } = useSelector((state) => state.playVideoReducer);
  // console.log(video);

  useEffect(() => {
    dispatch(getVideo(id));
  }, [id]);

  let { video, loading } = useSelector((state) => state.playVideoReducer);
  const { user } = useSelector((state) => state.authReducer.authData);
  console.log(user);
  console.log(video);

  const handleLike = () => {
    console.log("Cliked");
    likeVideo(id, user._id);
  };
  const handleUnlike = () => {
    dislikeVideo(id, user._id);
  };
  useEffect(() => {
    handleLike();
    handleUnlike();
  }, [handleLike, handleUnlike]);

  console.log(REACT_APP_PUBLIC_FOLDER + video.filepath);
  // if (!video) return "No Videos";
  return (
    <div
      className="col-xl-8 col-lg-8 col-md-6 col-sm-12"
      style={{ heigh: "1000px" }}
    >
      <video autoplay muted loop controls id="tm-video">
        <source
          src={REACT_APP_PUBLIC_FOLDER + video.filepath}
          type="video/mp4"
        />
      </video>
      <div className="row mb-4 mt-4">
        <h2 className="col-12 tm-text-primary">{video.title}</h2>
        {/* <div style={{ height: "2px solid black", width: "100p%" }}></div> */}
        <div className="d-flex justify-content-between">
          <span>
            {video.views} views . {video.createdAt}
          </span>
          <span>
            <i
              className="fa fa-thumbs-up"
              onClick={user && handleLike}
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
            {video.likes.length} &nbsp;&nbsp;
            <i
              className="fa fa-thumbs-down"
              onClick={user && handleUnlike}
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>{" "}
            {video.dislikes.length}
          </span>
        </div>
      </div>
      <div className="row mb-4 mt-4">
        <span style={{ fontSize: "30px" }}>
          <i class="fa fa-circle-user" style={{ fontSize: "50px" }}></i> Alamin
          Tokee
        </span>
      </div>

      <div className="row mb-4 mt-4">
        <span style={{ fontSize: "30px" }}>Commenting Here</span>
      </div>
    </div>
  );
};

export default VplayerLeft;
