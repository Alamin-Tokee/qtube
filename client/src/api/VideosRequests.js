import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getAllVideos = () => API.get(`/video`);
export const getVideoById = (id) => API.get(`/video/${id}`);
export const likeVideo = (id, userId) =>
  API.put(`/video/${id}/like`, { userId: userId });
export const dislikeVideo = (id, userId) =>
  API.put(`/video/${id}/dislike`, { userId: userId });
export const viewVideo = (id) => API.put(`/video/${id}/views`);
export const getAllVideosByUserId = (id) => API.get(`/video/yvideo/${id}`);
