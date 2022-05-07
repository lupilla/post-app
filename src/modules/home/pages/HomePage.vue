<template>
  <main>
    <h1>Bienvenid@ a nuestro blog</h1>
    <PostsCollection :posts="postsList"></PostsCollection>
  </main>
</template>
<script>
import PostsCollection from "../components/PostsCollection.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    PostsCollection,
  },
  computed: {
    ...mapGetters("posts", ["getAllPosts"]),
    postsList() {
      return this.getAllPosts;
    },
  },
  methods: {
    ...mapActions("posts", ["loadPosts"]),
    async getPosts() {
      try {
        await this.loadPosts();
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
