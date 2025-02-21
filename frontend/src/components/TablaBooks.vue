<template>
  <div class="container">
    <h1>Books List</h1>
    <button @click="refreshBooks">Refresh</button>
    <table class="books-table">
      <thead>
      <tr>
        <th>ISBN</th>
        <th>Title</th>
        <th>Price</th>
        <th>Author</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="book in books" :key="book.isbn">
        <td>{{ book.isbn }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.price }}</td>
        <td>{{ book.author }}</td>
        <td>
          <button @click="deleteBook(book.isbn)">Delete</button>
          <button @click="updateBook(book)">Update</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getBooksFacade, deleteBookFacade } from '@/clients/clientBooks.js';

export default {
  data() {
    return {
      books: []
    };
  },
  async created() {
    this.books = await getBooksFacade();
  },
  methods: {
    async deleteBook(isbn) {
      await deleteBookFacade(isbn);
      this.books = this.books.filter(book => book.isbn !== isbn);
    },
    updateBook(book) {
      this.$router.push({ name: 'BookActualizarPage', params: { libro: book } });
    },
    async refreshBooks() {
      this.books = await getBooksFacade();
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

.books-table {
  width: 80%;
  border-collapse: collapse;
  margin: 25px 0;
  box-shadow: 0px 0px 20px 5px #000;
  background-color: #e6e6e6;
  border-radius: 10px;
}

.books-table th, .books-table td {
  border: 1px solid #bebed2;
  padding: 12px 15px;
  text-align: left;
}

.books-table th {
  background-color: purple;
  color: white;
}

.books-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.books-table tr:hover {
  background-color: #ddd;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #5a005a;
}
</style>