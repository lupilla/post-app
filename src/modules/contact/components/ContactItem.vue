<template>
  <section class="section">
    <article class="article name">
      <h3 class="title">Nombre:</h3>
      <p class="text">{{ contact.name }}</p>
    </article>
    <article class="article email">
      <h3 class="title">Email:</h3>
      <p class="text">{{ contact.email }}</p>
    </article>
    <article class="article message">
      <h3 class="title">Mensaje:</h3>
      <p class="text">{{ contact.message }}</p>
    </article>
  </section>
</template>
<script>
export default {
  name: "ContactPage",
  props: {
    contact: {},
  },
};
</script>
<style scoped lang="scss">
.section {
  margin: 20px 0;
  display: flex;
  -webkit-box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, 0.24);
  box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  border: solid 1px #1b1c4a;
  width: 280px;
  flex-direction: column;
  margin-right: 20px;
  height: 360px;
  text-align: left;
  position: relative;
  &:before {
    content: "";
    background-image: url("@/assets/email-icon.jpg");
    background-size: 2rem;
    background-repeat: no-repeat;
    opacity: 0.8;
    position: absolute;
    top: 1rem;
    right: 0px;
    bottom: 0px;
    left: 260px;
  }
}
.article {
  border-bottom: solid 1px #ededed;
  &:last-child {
    border: none;
  }
}
.text {
  margin-top: 0;
}
.title {
  margin-bottom: 0;
}
.name,
.email {
  height: 106px;
}
.message {
  height: 128px;
}
</style>
