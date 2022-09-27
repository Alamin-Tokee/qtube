import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import { videoReducer, playVideoReducer, yvideoReducer } from "./VideoReducer";

export const reducers = combineReducers({
  authReducer,
  videoReducer,
  playVideoReducer,
  yvideoReducer,
});
