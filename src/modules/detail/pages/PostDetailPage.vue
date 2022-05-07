<template>
  <h1>Post Detail Page {{ post.id }}</h1>
  <div class="container">
    <section class="detail-section">
      <h2>Id del post:</h2>
      <p>{{ post.id }}</p>
    </section>
    <section class="detail-section">
      <h2>User id del post:</h2>
      <p>{{ post.userId }}</p>
    </section>
    <section class="detail-section">
      <h2>Título del post:</h2>
      <p>{{ post.title }}</p>
    </section>
    <section class="detail-section">
      <h2>Contenido del post:</h2>
      <p>{{ post.body }}</p>
    </section>
  </div>
  <router-link class="link" to="/">Volver</router-link>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PostDeatil",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters("posts", ["getPostById"]),
    post() {
      return this.getPostById(this.id);
    },
  },
};
</script>
<style scoped lang="scss">
.detail-section {
  text-align: left;
}
.container {
  max-width: 1154px;
  margin: 0 auto;
}
</style>
