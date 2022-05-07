<template>
  <main class="container">
    <h1>Detalle del post</h1>
    <section class="section">
      <img src="@/assets/post-image.jpg" alt="post image" class="image" />
      <div class="info">
        <section class="detail-section">
          <h2 class="title">Id del post:</h2>
          <p class="text">{{ post.id }}</p>
        </section>
        <section class="detail-section">
          <h2 class="title">User id del post:</h2>
          <p class="text">{{ post.userId }}</p>
        </section>
        <section class="detail-section">
          <h2 class="title">Título del post:</h2>
          <p class="text">{{ post.title }}</p>
        </section>
        <section class="detail-section">
          <h2 class="title">Contenido del post:</h2>
          <p class="text">{{ post.body }}</p>
        </section>
      </div>
    </section>
    <router-link class="link" to="/">Volver</router-link>
  </main>
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
  padding-bottom: 2rem;
}
.section {
  margin: 40px 0;
  display: flex;
  -webkit-box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, 0.24);
  box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, 0.24);
  padding-right: 16px;
  border: solid 1px #1b1c4a;
}
.image {
  max-width: 40%;
}
.info {
  padding-left: 2rem;
}
.link {
  &:visited,
  &:active,
  &:focus {
    color: #42b983;
    font-weight: bold;
  }
}
.title {
  font-size: 1rem;
  margin-bottom: 0;
}
.text {
  margin-top: 0;
}
@media (max-width: 1200px) {
  .image {
    display: none;
  }
}
</style>
