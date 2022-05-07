import axios from "axios";

/**
 * Public baseURL
 */
const postsApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default postsApi;
