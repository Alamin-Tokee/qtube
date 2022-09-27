import React, { useEffect } from "react";
import { getAllVideos } from "../../actions/VideoActions";
import Recommend from "../Recommend/Recommend";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Vplayerright = () => {
  const params = useParams();
  const dispatch = useDispatch();
  let { videos, loading } = useSelector((state) => state.videoReducer);

  useEffect(() => {
    dispatch(getAllVideos());
  }, []);
  if (!videos) return "No Videos";
  // if(params.id)
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-5 align-self-end">
      {loading
        ? "Fetching videos"
        : videos.map((video, id) => {
            return <Recommend data={video} id={id} />;
          })}
    </div>
  );
};

export default Vplayerright;
