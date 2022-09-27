import * as VideosApi from "../api/VideosRequests";

export const getAllVideos = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await VideosApi.getAllVideos();
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const getVideo = (id) => async (dispatch) => {
  console.log("Action start Here");
  dispatch({ type: "VIDEO_RETRIVE_START" });
  try {
    const { data } = await VideosApi.getVideoById(id);
    console.log(data);
    dispatch({ type: "VIDEO_RETRIVE_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "VIDEO_RETRIVE_FAIL" });
  }
};

export const getAllVideosByUserId = (id) => async (dispatch) => {
  console.log("Action start Here");
  dispatch({ type: "YVIDEO_RETRIVE_START" });
  try {
    const { data } = await VideosApi.getAllVideosByUserId(id);
    console.log(data);
    dispatch({ type: "YVIDEO_RETRIVE_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "YVIDEO_RETRIVE_FAIL" });
  }
};
