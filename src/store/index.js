import { createStore } from "vuex";
import posts from "@/modules/posts/store";

/**
 * This method creates the global store
 * It includes the posts module store with actions, getters and mutations from the todo module
 * @param {Object} modules: modules of the store
 */
const store = createStore({
  modules: {
    posts,
  },
});

export default store;
