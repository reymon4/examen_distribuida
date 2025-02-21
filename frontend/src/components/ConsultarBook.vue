<template>
  <div class="container">
    <h1>Consult Book</h1>
    <div v-if="!libro" class="input-container">
      <label for="bookId">Enter Book ID:</label>
      <input type="text" v-model="bookId" id="bookId" />
      <button @click="getBook">Search</button>
    </div>
    <div v-if="libro">
      <FormularioBooks class="registro" tipo="consultar" :libro="libro" />
    </div>
  </div>
</template>

<script>
import FormularioBooks from "@/components/FormularioBooks.vue";
import { getBookFacade } from "@/clients/clientBooks";

export default {
  components: {
    FormularioBooks,
  },
  data() {
    return {
      bookId: '',
      libro: null,
    };
  },
  methods: {
    async getBook() {
      try {
        const book = await getBookFacade(this.bookId);
        if (book) {
          this.libro = book;
        } else {
          alert('Book not found');
        }
      } catch (error) {
        console.error('Error fetching book:', error);
        alert('Error fetching book');
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #5a005a;
}

.registro {
  margin: auto;
  width: 80%;
}
</style>