<template>
  <div class="container">
    <div class="formulario">
      <div class="form">
        <p type="Isbn"></p>
        <input type="text" v-model="isbn" />
        <p type="Tittle"></p>
        <input type="text" v-model="title" />
        <p type="Price"></p>
        <input type="text" v-model="price" />
        <p type="Author"></p>
        <input type="text" v-model="author" />
        <div class="buttons">
          <button v-if="tipo === 'crear'" @click="createBook">Save</button>
          <button v-if="tipo === 'actualizar'" @click="updateBook">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {createBookFacade, updateBookFacade} from "@/clients/clientBooks.js";
export default {
  props:{
    tipo:{
      type: String,
      required: true
    },
    libro:{
      type:Object
    },
  },
  data() {
    return {
      body:{
        isbn: null,
        title: null,
        price: null,
        author: null,
      }

    };
  },
  methods: {
    async createBook() {
      const bodyCrear = {
        isbn: this.body.isbn,
        title: this.body.title,
        price: this.body.price,
        author: this.body.author,
      };
      await createBookFacade(bodyCrear);
    },
    async updateBook() {
      if(this.getBook()){
        this.body = this.getBook();
        const bodyActualizar = {
          isbn: this.body.isbn,
          title: this.body.title,
          price: this.body.price,
          author: this.body.author,
        };
        await updateBookFacade(this.libro, bodyActualizar);
      }

    },

  },
  watch:{
    libro(newvVal, oldVal){
      if(newvVal !== oldVal){
        this.body = newvVal;
      }

    }

  }

};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

p{
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