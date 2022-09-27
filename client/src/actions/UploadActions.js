import * as UploadApi from "../api/UploadRequests";

export const uploadVideo = (data, navigate) => async (dispatch) => {
  try {
    console.log("Image upload action start");
    console.log(data);
    await UploadApi.uploadVideo(data);
    navigate("../profile/:id", { replace: true });
  } catch (error) {
    console.log(error);
  }
};

export const uploadContent = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.uploadContent(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
