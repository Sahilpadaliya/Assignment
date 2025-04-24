<script setup>
import AddTodo from './AddTodo.vue';
import FilterTodos from './FilterTodos.vue';
import Todos from './Todos.vue';


</script>

<template>
 <div id="app">
   <AddTodo/>
   <FilterTodos/>
   <Todos/>
   <div class="icon-right">
     <span>Box Content</span>
     <i class="fas fa-trash icon"></i>
   </div>
 </div>

</template>

<style scoped>
#app {
  padding: 0;
  margin: 0;
  width: 100vw; 
  min-height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: stretch; 
  justify-content: flex-start;
}

.icon-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon-right .icon {
  margin-left: auto;
}
</style>









