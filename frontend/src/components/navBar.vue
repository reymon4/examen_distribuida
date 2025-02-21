<template>
  <div class="container">
    <!-- Content of the component -->
    <router-link to="/books">Books</router-link>
    <router-link to="/books/registrar">Create Book</router-link>
    <router-link to="/books/editar">Update Book</router-link>
    <router-link to="/books/eliminar">Delete Book</router-link>
    <router-link to="/books/consultar">View Book</router-link>
  </div>
</template>

<script>
import router from "@/router/router";
export default {
  components: {
    // Component imports
    router,
  },

};
</script>

<style scoped>
/* Component styles */
.container{
  display: flex;
  padding: 1% 1%;
  margin-bottom: 2%;
  background: purple;
  justify-content: center;
}

.container a {
  color: white;
  text-decoration: none;
  margin: 0% 2%;
  padding: 0.5% 1%;
  border-radius: 15px;
  font-weight: bold; /* Make text bold */
}

a:focus{
  outline: none;
  background: black;
}
a:hover{
  background: rgb(77, 77, 77);
}
</style>