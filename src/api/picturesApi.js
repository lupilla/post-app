import axios from "axios";

/**
 * Public baseURL
 */
const picturesApi = axios.create({
  baseURL: "https://picsum.photos/300/200?random=",
});

export default picturesApi;
