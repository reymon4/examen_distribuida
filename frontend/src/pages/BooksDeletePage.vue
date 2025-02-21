<template>
  <div class="container">
    <Delete />
  </div>
</template>

<script>
import Delete from '@/components/Delete.vue';

export default {
  components: {
    Delete
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
</style>