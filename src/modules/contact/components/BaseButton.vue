<template>
  <button
    type="button"
    @click="submitContact"
    class="button"
    :disabled="!isEnabled"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "BaseButton",
  emits: ["submitClicked"],
  props: {
    isEnabled: {
      type: Boolean,
      default: false,
    },
  },
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
.button {
  cursor: pointer;
  text-decoration: none;
  padding: 0.6rem 1.6rem;
  margin: 1rem;
  margin-left: 0;
  border: solid 1px #1b1c4a;
  background: #1b1c4a;
  color: white;
  font-weight: bold;
  &:hover {
    background: #42b983;
  }
  &:disabled {
    background-color: silver;
    opacity: 0.8;
    cursor: not-allowed;
    border: solid 1px gray;
  }
}
</style>
