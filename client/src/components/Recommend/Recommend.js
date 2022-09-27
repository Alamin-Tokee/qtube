import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { viewVideo } from "../../api/VideosRequests";
import moment from "moment";
import { Link } from "react-router-dom";
const REACT_APP_PUBLIC_FOLDER = "http://localhost:5000/videos/";

const Recommend = ({ data }) => {
  const [views, setViews] = useState(data.views);
  const id = data._id;

  const handleView = () => {
    viewVideo();
    setViews((prev) => prev + 1);
  };

  return (
    <div
      className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-5 align-self-end"
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
          <Link to={`/video/${id}`}>View more</Link>
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

export default Recommend;
