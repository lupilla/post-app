/**
 * Mutation that sets a collection of posts in the store provided
 * @param {Object} state: general object state of the application
 * @param {Object} posts: posts to include in the store
 */
export const setPosts = (state, posts) => {
  state.posts = [...state.posts, ...posts];
};

/**
 * Mutation that creates a contact in the store
 * @param {Object} state: general object state of the application
 * @param {Object} contact: contact to add in the collection of contacts
 */
export const addContact = (state, contact) => {
  state.contacts = [contact, ...state.contacts];
};
