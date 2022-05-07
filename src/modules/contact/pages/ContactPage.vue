<template>
  <section>
    <h1>Contact Page</h1>
    <form>
      <div>
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" v-model="contact.name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" v-model="contact.email" />
      </div>
      <div>
        <label for="message">Mensaje</label>
        <textarea name="message" rows="10" cols="50" v-model="contact.message">
					Write something here
				</textarea
        >
      </div>
      <BaseButton @submit-clicked="submitContact" />
      <p v-if="isInvalid">
        Rellena el mail y el nombre del contacto en el formulario
      </p>
      <ContactList :contacts="contacts"></ContactList>
    </form>
  </section>
</template>
<script>
import BaseButton from "../components/BaseButton.vue";
import ContactList from "../components/ContactList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ContactPage",
  components: {
    BaseButton,
    ContactList,
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: "",
      },
      isInvalid: false,
    };
  },
  methods: {
    ...mapActions("posts", ["addContact"]),
    initContact() {
      this.contact = {
        name: "",
        email: "",
        message: "",
      };
    },
    async submitContact() {
      if (this.contact.name && this.contact.email) {
        this.isInvalid = false;
        try {
          const contact = this.contact;
          await this.addContact(contact);
          this.initContact();
        } catch (error) {
          console.error(error);
        }
      } else {
        this.isInvalid = true;
      }
    },
  },
  computed: {
    ...mapGetters("posts", ["getAllContacts"]),
    contacts() {
      return this.getAllContacts;
    },
  },
};
</script>
<style scoped lang="scss"></style>
