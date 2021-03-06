/**
 * This getter provides all posts stored in the store
 * @param {Object} state: state global object for getting data
 */
export const getAllPosts = (state) => state.posts;

/**
 * This getter provides all contacts stored
 * @param {Object} state: state global object for getting data
 */
export const getAllContacts = (state) => state.contacts;

/**
 * This getter provides a post by an id
 * @param {Object} state: state global object for getting data
 * @param {String} id: id used to the search of a post
 */
export const getPostById =
  (state) =>
  (id = "") => {
    const post = state.posts.find((post) => post.id === id);
    if (!post) return;
    return { ...post };
  };

/**
 * This getter provides the length of the contacts stored
 * @param {Object} state: state global object for getting data
 */
export const getAllContactsLength = (state) => state.contacts.length;
