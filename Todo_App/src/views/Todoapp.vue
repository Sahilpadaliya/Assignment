<template>
  <div class="todo-app">
    <h1>Welcome to the Todo App</h1>
    <button  class= "button"@click="logout">Logout</button>
    <todo11/>
  </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'
import todo11 from '@/components/todo11.vue'

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/login')
}
</script>

<style scoped>
* {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
.todo-app {

    text-align: center;
    margin-top: 100px 200px 200px;
    max-width: 100%;
    word-wrap: break-word;

}

.button{
  background-color: rgb(229, 98, 98) ;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:10px
  }
  h1{
    text-decoration: underline;
    color:black
  }

  @media (max-width: 600px) {
  h1 {
    display: none;
  }
}
</style>
