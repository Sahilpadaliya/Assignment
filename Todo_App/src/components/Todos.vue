 
<!-- TodoList.vue -->
 <script setup>
 import { computed, onMounted, ref } from 'vue';
 import { useStore } from 'vuex';
 
 const store = useStore();
 const allTodos = computed(() => store.getters.allTodos);
 const showTodos = ref(false);
 const isLoading = ref(true);
 const editingTodoId = ref(null);
 const editedTitle = ref('');
 
 // Delete a todo
 const deleteTodo = (id) => {
   store.dispatch('deleteTodo', id);
 };
 
 // Start editing
 const startEditing = (todo) => {
   editingTodoId.value = todo.id;
   editedTitle.value = todo.title;
 };
 
 // Save edit
 const confirmEdit = (todo) => {
   if (editedTitle.value.trim()) {
     const updatedTodo = { ...todo, title: editedTitle.value };
     store.dispatch('updateTodo', updatedTodo);
     editingTodoId.value = null;
   }
 };
 
 onMounted(() => {
   store.dispatch('fetchTodos0');
   setTimeout(() => {
     isLoading.value = false;
     showTodos.value = true;
   }, 2000);
 });
 </script>
 
 <template>
   <div class="todo-container">
     <h1>Todos</h1>
     <div v-if="isLoading" class="loading">Loading...</div>
     <div v-else class="todos">
       <div
         v-if="showTodos"
         v-for="todo in allTodos"
         class="todo"
         :key="todo.id"
       >
         <template v-if="editingTodoId === todo.id">
           <input
             v-model="editedTitle"
             class="edit-input"
             @keyup.enter="confirmEdit(todo)"
           />
           <i
             class="fas fa-check icon save"
             title="Save"
             @click="confirmEdit(todo)"
           ></i>
         </template>
         <template v-else>
           <span>{{ todo.title }}</span>
           <div class="icons">
             <i
               class="fas fa-edit icon edit"
               title="Edit"
               @click="startEditing(todo)"
             ></i>
             <i
               class="fas fa-trash icon delete"
               title="Delete"
               @click="deleteTodo(todo.id)"
             ></i>
           </div>
         </template>
       </div>
     </div>
   </div>
 </template>
 
 <style scoped>
.todo-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #555;
  margin-top: 20px;
}

.todos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.todo {
  background-color: #10b981;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: 500;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.icons {
  display: flex;
  gap: 10px;
  margin-left: auto;
  flex-shrink: 0;
}

.icon {
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.2s ease;
}

.icon.edit:hover {
  color: yellow;
}

.icon.delete:hover {
  color: red;
}

.icon.save:hover {
  color: #16f57c;
}

.edit-input {
  flex-grow: 1;
  padding: 6px 10px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  min-width: 0;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .todos {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  .todo {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .icons {
    margin-left: 0;
    justify-content: flex-end;
    width: 100%;
  }

  .edit-input {
    width: 100%;
  }
}
</style>

 
 
 
 
