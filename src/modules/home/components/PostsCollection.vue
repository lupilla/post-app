<template>
  <section>
    <ul class="list">
      <li
        v-for="(post, index) in posts"
        :key="post.id"
        v-show="(pag - 1) * items <= index && pag * items > index"
      >
        <section class="section">
          <PostImage :id="post.id"></PostImage>
          <PostItem :post="post"></PostItem>
        </section>
      </li>
    </ul>
    <Pagination
      :items="items"
      :pag="pag"
      :length="posts.length"
      @previous="previousPag"
      @next="nextPag"
    >
    </Pagination>
  </section>
</template>

<script>
import PostImage from "./PostImage.vue";
import Pagination from "./Pagination.vue";
import PostItem from "./PostItem.vue";

export default {
  name: "PostsCollection",
  components: {
    PostImage,
    Pagination,
    PostItem,
  },
  props: {
    posts: {},
  },
  data() {
    return {
      items: 20, // Numero de resultados por página
      pag: 1, // Página inicial
    };
  },
  methods: {
    previousPag() {
      this.pag -= 1;
    },
    nextPag() {
      this.pag += 1;
    },
  },
};
</script>
<style scoped lang="scss">
h3 {
  margin: 20px 0 0;
}
.list {
  max-width: 1154px;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
}
li {
  margin: 0 10px;
}
.section {
  margin: 40px 0;
  display: flex;
  -webkit-box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, 0.24);
  box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, 0.24);
  padding-right: 16px;
  border: solid 1px #1b1c4a;
}
@media (max-width: 600px) {
  .section {
    display: block;
    width: 100%;
    max-width: 300px;
    padding-right: 0;
    margin: 20px auto;
  }
}
</style>
