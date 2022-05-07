<template>
  <div class="app">
    <NavBar />
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="component-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import NavBar from "./modules/shared/components/NavBar.vue";
import FooterComponent from "./modules/shared/components/FooterComponent.vue";

export default {
  components: {
    NavBar,
    FooterComponent,
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.root {
  height: 100%;
}

.content {
  margin-bottom: auto;
}
//route fade transition
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
@media (max-width: 1200px) {
  .content {
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
  }
}
</style>
