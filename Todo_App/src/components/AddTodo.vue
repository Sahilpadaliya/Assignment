<script setup>
  import { useStore } from 'vuex';
  import { ref } from 'vue';
  
  const store = useStore();
  const title = ref('');
  
  const onSubmit = (event) => {
      event.preventDefault();
      store.dispatch('addTodo', title.value);
      title.value = '';
  };
  </script>
  
  <template>
    <div class="add-todo-container">
      <h3>Add Todos</h3>
      <form @submit="onSubmit" class="add-form">
        <input
          type="text"
          v-model="title"
          placeholder="Add Todo"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </template>
  
  <style scoped>
  .add-todo-container {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    margin: 20px auto;
    box-sizing: border-box;
    background-color: #f9f9f9;
  }

  .add-todo-container h3 {
    margin-bottom: 15px;
    font-size: 24px;
    color: #333;
    text-align: center;
  }

  .add-form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .add-form input[type="text"] {
    flex: 1 1 70%;
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-sizing: border-box;
  }

  .add-form input[type="submit"] {
    flex: 1 1 25%;
    padding: 12px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #10b981; 
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .add-form input[type="submit"]:hover {
    background-color: #059669; 
  }

  @media (max-width: 480px) {
    .add-form input[type="text"],
    .add-form input[type="submit"] {
      flex: 1 1 100%;
    }
  }
  </style>

