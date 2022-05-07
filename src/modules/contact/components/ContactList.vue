<template>
  <section v-if="contactList" class="container">
    <h2>Contactos guardados:</h2>
    <ul class="list">
      <li v-for="(contact, index) in contacts" :key="index">
        <ContactItem :contact="contact"></ContactItem>
      </li>
    </ul>
  </section>
</template>
<script>
import ContactItem from "../components/ContactItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "PostsCollection",
  components: {
    ContactItem,
  },
  props: {
    contacts: {},
  },
  methods: {},
  computed: {
    ...mapGetters("posts", ["getAllContactsLength"]),
    contactList() {
      console.log("this.getAllContactsLength", this.getAllContactsLength);
      return this.getAllContactsLength;
    },
  },
};
</script>
<style scoped lang="scss">
.list {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
}
.container {
  padding-bottom: 2rem;
}
</style>
