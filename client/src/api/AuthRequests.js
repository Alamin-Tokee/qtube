import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const logIn = (formData) => API.post("/users/login", formData);

export const signUp = (formData) => API.post("/users/register", formData);
