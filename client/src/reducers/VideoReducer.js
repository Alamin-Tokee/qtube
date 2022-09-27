const videoReducer = (
  state = { videos: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        videos: [action.data, ...state.videos],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    // belongs to Posts.jsx
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      return { ...state, videos: action.data, loading: false, error: false };
    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

const playVideoReducer = (
  state = { video: {}, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "VIDEO_RETRIVE_START":
      return { ...state, loading: true, error: false };
    case "VIDEO_RETRIVE_SUCCESS":
      return { ...state, video: action.data, loading: false, error: false };
    case "VIDEO_RETRIVE_FAIL":
      return { ...state, loading: false, error: false };
    default:
      return state;
  }
};

const yvideoReducer = (
  state = { videos: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        videos: [action.data, ...state.videos],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    // belongs to Posts.jsx
    case "YVIDEO_RETRIVE_START":
      return { ...state, loading: true, error: false };
    case "YVIDEO_RETRIVE_SUCCESS":
      return { ...state, videos: action.data, loading: false, error: false };
    case "YVIDEO_RETRIVE_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export { videoReducer, playVideoReducer, yvideoReducer };
