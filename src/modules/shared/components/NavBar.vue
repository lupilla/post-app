<template>
  <div class="navigation-wrapper">
    <div class="container">
      <img src="@/assets/logo.png" alt="logo" class="logo" />
      <nav class="nav">
        <router-link class="link" to="/">Inicio</router-link>
        <router-link class="link" to="/contact">Contacto</router-link>
        <router-link class="link" to="/author">Autor</router-link>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "NabVar",
};
</script>
<style scoped lang="scss">
.navigation-wrapper {
  background: #1b1c4a;
  border-bottom: solid 1px white;
}
.container {
  padding-left: 16px;
  max-width: 1154px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
}
.logo {
  width: 50px;
  height: 50px;
}
nav {
  padding: 30px;
  a {
    text-decoration: none;
    padding: 2rem;
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #ffdf40;
    }
  }
}
@media (min-width: 321px) and (max-width: 600px) {
  nav {
    a {
      padding: 1rem;
    }
  }
}
@media (max-width: 320px) {
  nav {
    a {
      padding: 0.5rem;
    }
  }
}
</style>
