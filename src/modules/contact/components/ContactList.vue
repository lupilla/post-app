<template>
  <section>
    <ul class="list">
      <li v-for="(contact, index) in contacts" :key="index">
        <section class="section">
          <article class="article">
            <h2 class="title">Nombre:</h2>
            <p class="text">{{ contact.name }}</p>
          </article>
          <article class="article">
            <h2 class="title">Email:</h2>
            <p class="text">{{ contact.email }}</p>
          </article>
          <article class="article">
            <h2 class="title">Nombre:</h2>
            <p class="text">{{ contact.name }}</p>
          </article>
        </section>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "PostsCollection",
  props: {
    contacts: {},
  },
  methods: {},
};
</script>
<style scoped lang="scss"></style>
