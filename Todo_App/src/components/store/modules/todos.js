import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos0({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos', response.data);
  },
  async deleteTodo({commit},id){
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo',id)
  },
  async updateTodo({ commit }, updatedTodo) {
    setTimeout(() => {
      commit('UPDATE_TODO', updatedTodo);
    }, 300);
  },
async addTodo ({commit}, title){
  const response =await axios.post(`https://jsonplaceholder.typicode.com/todos`,
    {title:title,completed:false})
    commit('addTodo',response.data)
},

async filterTodos({ commit }, limit) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
  commit('setTodos', response.data);
}

};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  removeTodo:(state,id)=>state.todos = state.todos.filter((todo)=>todo.id !==id),
  
  UPDATE_TODO(state, updatedTodo) {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  addTodo:(state, newTodo)=>state.todos.unshift(newTodo)
  
};

export default {
  state,
  getters,
  actions,
  mutations
};
