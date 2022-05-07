<template>
  <section class="container">
    <h1>Formulario de Contacto</h1>
    <section class="section">
      <img src="@/assets/email.jpg" alt="email image" class="image" />
      <form class="form">
        <div class="form-group">
          <label for="name" class="label">Nombre:</label>
          <input
            type="text"
            class="input"
            id="name"
            name="name"
            maxlength="50"
            v-model="contact.name"
            @input="checkEnabled"
          />
        </div>
        <div class="form-group">
          <label for="email" class="label">Email:</label>
          <input
            type="text"
            maxlength="50"
            class="input"
            id="email"
            name="email"
            v-model="contact.email"
            @input="checkEnabled"
          />
        </div>
        <div>
          <label for="message" class="label">Mensaje:</label>
          <textarea
            maxlength="100"
            class="textarea"
            name="message"
            rows="3"
            cols="50"
            v-model="contact.message"
            @input="checkEnabled"
          >
            Write something here
          </textarea>
        </div>
        <BaseButton @submit-clicked="submitContact" :isEnabled="isEnabled">
          Crear contacto
        </BaseButton>
      </form>
    </section>
    <ContactList :contacts="contacts"></ContactList>
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
      isEnabled: false,
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
      this.isEnabled = false;
    },
    checkEnabled() {
      if (this.contact.name && this.contact.email && this.contact.message) {
        this.isEnabled = true;
      } else {
        this.isEnabled = false;
      }
    },
    async submitContact() {
      if (this.contact.name && this.contact.email && this.contact.message) {
        try {
          const contact = this.contact;
          await this.addContact(contact);
          this.initContact();
        } catch (error) {
          console.error(error);
        }
      } else {
        this.isInvalid = true;
        this.isEnabled = false;
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
<style scoped lang="scss">
.container {
  max-width: 1154px;
  margin: 0 auto;
}
.section {
  margin: 40px 0;
  display: flex;
  -webkit-box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, 0.24);
  box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, 0.24);
  padding-right: 16px;
  border: solid 1px #1b1c4a;
}
.image {
  max-width: 40%;
}
.form {
  width: 100%;
  margin: 0 auto;
  text-align: left;
  max-width: 500px;
  padding: 1rem;
}
.textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  border: none;
  background: #ededed;
  height: 42px;
  border-bottom: solid 5px #e2e2e2;
  padding-left: 0.4rem;
  padding-right: 1rem;
  border-radius: 0;
  outline: none;
  resize: none;
}
.label {
  display: block;
}
.input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  border: none;
  background: #ededed;
  height: 24px;
  border-bottom: solid 5px #e2e2e2;
  padding-left: 0.4rem;
  padding-right: 1rem;
  border-radius: 0;
  outline: none;
}
.form-group {
  margin-bottom: 0.6rem;
}
@media (max-width: 1200px) {
  .image {
    display: none;
  }
}
@media (max-width: 400px) {
  .form {
    max-width: 280px;
  }
}
</style>
