vue<template>
  <h1>Create Book</h1>
  <formularioBooks class="registro" tipo="crear"></formularioBooks>
</template>

<script>
import formularioBooks from '@/components/FormularioBooks.vue';
export default {
  components: {
    formularioBooks
  },
  data() {
    return {
      // Component data
    };
  },
  methods: {
    // Component methods
  },

};
</script>

<style scoped>
/* Component styles */
.registro {
  margin: auto;
  width: 80%;
}
</style>