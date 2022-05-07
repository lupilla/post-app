import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

/**
 * Module object of posts in the store initialization
 * This module contains actions, getters, mutations and state
 */
const postsModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default postsModule;
