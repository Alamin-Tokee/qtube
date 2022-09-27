import React, { useEffect } from "react";
import "./Yvideos.css";
// import { CoursesData } from "../../data";
import { getAllVideosByUserId } from "../../actions/VideoActions";
import Video from "../Video/Video";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Courses = () => {
  const params = useParams();
  const dispatch = useDispatch();
  let { videos, loading } = useSelector((state) => state.yvideoReducer);
  const user = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    // console.log(user.user._id);
    dispatch(getAllVideosByUserId(user.user._id));
  }, []);
  if (!videos) return "No Videos";
  // if(params.id)
  return (
    <div className="container-fluid tm-container-content tm-mt-60">
      <div className="row mb-4">
        <h2 className="col-6 tm-text-primary">Your Video {videos.length}</h2>
      </div>
      <div className="row tm-mb-90 tm-gallery">
        {loading
          ? "Fetching videos"
          : videos.map((video, id) => {
              return <Video data={video} id={id} />;
            })}
      </div>

      <div className="row tm-mb-90">
        <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
          {/* <a
              href="javascript:void(0);"
              className="btn btn-primary tm-btn-prev mb-2 disabled"
            >
              Previous
            </a> */}
          <div className="tm-paging d-flex">
            <a href="javascript:void(0);" className="active tm-paging-link">
              1
            </a>
            <a href="javascript:void(0);" className="tm-paging-link">
              2
            </a>
            <a href="javascript:void(0);" className="tm-paging-link">
              3
            </a>
            <a href="javascript:void(0);" className="tm-paging-link">
              4
            </a>
            <a href="javascript:void(0);" className="tm-paging-link">
              &gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
