<template>
  <article class="article">
    <h2 class="title">{{ post.title }}</h2>
    <p class="text">{{ post.body }}</p>
    <router-link class="link" :to="`/detail/${post.id}`"
      >Ver detalle</router-link
    >
  </article>
</template>
<script>
export default {
  name: "PostItem",
  props: {
    post: {},
  },
};
</script>
<style scoped lang="scss">
.detail {
  &:visited,
  &:active,
  &:focus {
    color: #42b983;
  }
}
.article {
  text-align: left;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
}
.link {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 16px;
  color: #8cd96b;
  font-weight: bold;
  align-self: flex-end;
  padding-bottom: 16px;
  margin-top: auto;
}
.title {
  align-self: flex-start;
  margin-bottom: auto;
}
.text {
  align-self: flex-start;
  margin-bottom: auto;
}
@media (max-width: 600px) {
  .article {
    margin: 0 auto;
    padding: 24px;
  }
  .title {
    margin-top: 0;
  }
  .link {
    padding: 0;
    padding-top: 1rem;
  }
}
</style>
