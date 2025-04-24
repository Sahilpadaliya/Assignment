<script setup>
import { useStore } from 'vuex';

const store = useStore();

function filterTodos(event) {
  const limit = parseInt(event.target.value);
  store.dispatch('filterTodos', limit);
}
</script>

<template>
<div>
    Filter Todos:
    <select @change="filterTodos">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="10">10</option>
        <option value="5">5</option>
    </select>
</div>
</template>

<style scoped>
  select {
    margin-top: 20px;
    padding: 6px;
    border: 1px solid #41b883;
    width: 100%; 
    max-width: 300px; 
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    select {
      font-size: 14px; 
    }
  }
</style>





