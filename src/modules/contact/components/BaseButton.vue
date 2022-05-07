<template>
  <button type="button" @click="submitContact">Crear contacto</button>
</template>
<script>
export default {
  name: "BaseButton",
  emits: ["submitClicked"],
  methods: {
    submitContact() {
      this.$emit("submitClicked");
    },
  },
};
</script>
<style scoped lang="scss">
.detail-section {
  display: flex;
}
.container {
  max-width: 1154px;
  margin: 0 auto;
}
</style>
