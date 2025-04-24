<template>
  <div class="wrapper">
    <div class="login-container">
      <form @submit.prevent="Login">
        <h2>Login</h2>
        <div>
          <input type="text" v-model="username" placeholder="Username" required />
        </div>
        <div>
          <input type="password" v-model="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import { useRouter } from 'vue-router';
// import router from '../router';
import { useAuthStore } from '../store/auth';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
const auth = useAuthStore();


const Login = async () => {
  console.log("route in login: ", router) ;
  if (!username.value || !password.value) {
    error.value = 'All fields are required.';
    return;
  }

  try {
    const success = await auth.login(username.value, password.value);
    if (success) {
      localStorage.setItem("isLoggedIn", true) ;
      router.push('/todo');
    } else {
      error.value = 'Invalid username or password.';
    }
  } catch (err) {
    console.error('Login error:', err);
    error.value = 'An error occurred during login.';
  }
};
</script>

<style scoped>
*{
  box-sizing:border-box;
  padding:0;
  margin:0
}

body {
  background-color: red; 
}

 .wrapper {
  height: 100vh;
  width: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:200px; 
  margin-left:250px; 
  
}

/* Login container styling */
.login-container {
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: lightcyan;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Input fields */
input {
  display: block;
  width: 100%;
  margin: 0.75rem 0;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Submit button */
button {
  padding: 0.6rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Error message */
.error {
  color: red;
  margin-top: 0.5rem;
}

@media (max-width: 1300px) {
  .wrapper {
    width: 90vw;
    margin-left: 0;
  }

  .login-container {
    max-width: 400px;
    padding: 1.5rem;
  }

  input {
    margin: 0.5rem 0;
    padding: 0.5rem;
  }

  button {
    padding: 0.5rem;
  }
}

@media (max-width: 768px) { 
  .wrapper {
    width: 100vw;
    margin-left: 0;
  }

  .login-container {
    max-width: 350px;
    padding: 1rem;
  }

  input {
    margin: 0.5rem 0;
    padding: 0.4rem;
  }

  button {
    padding: 0.4rem;
  }
}

@media (max-width: 350px) {
  .wrapper {
    width: 100vw;
    margin-left: 0;
    padding: 1rem;
  }

  .login-container {
    max-width: 300px;
    padding: 0.8rem;
  }

  input {
    margin: 0.4rem 0;
    padding: 0.3rem;
  }

  button {
    padding: 0.3rem;
  }
}
</style>



