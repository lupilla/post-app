import postsApi from "@/api/postsApi.js";
/**
 * Public baseURL from firebase imported from postsApi:
 * https://jsonplaceholder.typicode.com/posts
 */

/**
 * This action makes a GET request to bring posts from baseURL
 * @param {Object} commit: method to execute the mutation "setPosts"
 */
export const loadPosts = async ({ commit }) => {
  try {
    const { data } = await postsApi.get();
    if (!data) {
      commit("setPosts", []);
      return;
    }
    const posts = Array.from(data);
    commit("setPosts", posts);
  } catch (error) {
    throw new Error("An error ocurred when getting posts");
  }
};

/**
 * This action add a new contact to the store
 * @param {Object} commit: method to execute the mutation "addContact"
 * @param {Object} contact: Object to set a contact in the store with name, email and message
 */
export const addContact = async ({ commit }, contact) => {
  try {
    commit("addContact", contact);
  } catch (error) {
    throw new Error("An error ocurred when setting a contact");
  }
};
