<template>
  <main class="main">
    <SpinnerComponent :isLoading="isLoading"></SpinnerComponent>
    <h1>Bienvenid@ a nuestro blog</h1>
    <PostsCollection :posts="postsList"></PostsCollection>
  </main>
</template>
<script>
import SpinnerComponent from "@/modules/shared/components/Spinner.vue";
import PostsCollection from "../components/PostsCollection.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    PostsCollection,
    SpinnerComponent,
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
      if (this.getAllPosts.length === 0) {
        this.isLoading = true;
        try {
          await this.loadPosts();
        } catch (error) {
          console.error(error);
        } finally {
          this.isLoading = false;
        }
      }
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
<style scoped lang="scss">
.main {
  height: 100%;
}
</style>
