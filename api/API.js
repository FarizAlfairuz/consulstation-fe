import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const API = axios.create({
  baseURL: baseURL,
});

export default API;
