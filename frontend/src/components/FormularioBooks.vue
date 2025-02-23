<template>
  <div class="container">
    <div v-if="message" class="success-message">{{ message }}</div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div class="formulario">
      <div class="form">
        <p type="Isbn"></p>
        <input type="text" v-model="body.isbn" :disabled="tipo==='consultar' || tipo==='delete'" />
        <p type="Title"></p>
        <input type="text" v-model="body.title" :disabled="tipo==='consultar' || tipo==='delete'" />
        <p type="Price"></p>
        <input type="text" v-model="body.price" :disabled="tipo==='consultar' || tipo==='delete'" />
        <p type="Author"></p>
        <input type="text" v-model="body.author" :disabled="tipo==='actualizar' || tipo==='consultar' || tipo==='delete'" />
        <div class="buttons">
          <button v-if="tipo === 'crear'" @click="createBook">Save</button>
          <button v-if="tipo === 'actualizar'" @click="updateBook">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createBookFacade, updateBookFacade } from "@/clients/clientBooks.js";

export default {
  props: {
    tipo: {
      type: String,
      required: true
    },
    libro: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      body: {
        isbn: null,
        title: null,
        price: null,
        author: null
      },
      message: '',
      errorMessage: ''
    };
  },
  methods: {
    async createBook() {
      try {
        const bodyCrear = { ...this.body };
        await createBookFacade(bodyCrear);
        this.message = 'The book has been successfully created.';
        this.errorMessage = '';
      } catch (error) {
        this.message = '';
        this.errorMessage = 'Failed to create the book. Please try again later.';
      }
    },
    async updateBook() {
      try {
        const bodyActualizar = { ...this.body };
        await updateBookFacade(this.libro.id, bodyActualizar);
        this.message = 'The book has been successfully updated.';
        this.errorMessage = '';
      } catch (error) {
        this.message = '';
        this.errorMessage = 'Failed to update the book. Please try again later.';
      }
    }
  },
  watch: {
    libro: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.body = { ...newVal };
          this.message = '';
          this.errorMessage = '';
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.success-message {
  color: green;
  font-weight: bold;
  margin-bottom: 10px;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  text-align: start;
}

p:before {
  content: attr(type);
  display: block;
  margin: 5px;
  font-size: 15px;
  color: black;
}

input {
  width: 200px;
  border: none;
  background: none;
  border-bottom: 2px solid #bebed2;
}

input:focus {
  outline: none;
  border-bottom: 2px solid #78788c;
}

input:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}

.form {
  width: 200px;
  background-color: #e6e6e6;
  border-radius: 10px;
  padding: 25px 35px;
  margin: 25px;
  box-shadow: 0px 0px 20px 5px #000;
}

button {
  width: 100px;
  padding: 10px 20px;
  background-color: purple;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  border: none;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 25px;
  padding: 12px;
}
</style>