import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { viewVideo } from "../../api/VideosRequests";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";
const REACT_APP_PUBLIC_FOLDER = "http://localhost:5000/videos/";

const Video = ({ data }) => {
  // console.log(data);
  const [views, setViews] = useState(data.views);
  const navigate = useNavigate();
  const id = data._id;
  const handleView = () => {
    viewVideo(id);
    setViews((prev) => prev + 1);
  };

  return (
    <div
      className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-5 align-self-end"
      onClick={handleView}
    >
      <figure className="effect-ming tm-video-item">
        <video style={{ height: "250px" }}>
          <source
            src={
              data.filepath !== "home"
                ? REACT_APP_PUBLIC_FOLDER + data.filepath
                : require("../../images/img-03.jpg")
            }
            type="video/mp4"
          />
        </video>
        <figcaption className="d-flex align-items-center justify-content-center">
          <h2>Clocks</h2>
          <Link to={`/video/${id}`}></Link>
        </figcaption>
      </figure>
      <div className="d-flex justify-content-between tm-text-gray">
        <span className="tm-text-gray-light">{data.createdAt}</span>
        <span>{views} views</span>
      </div>
      <h4>{data.title}</h4>
    </div>
  );
};

export default Video;
