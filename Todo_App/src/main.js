import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import store from './components/store';
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia();

app.use(createPinia())
app.use(pinia); 
app.use(store);  // Register the Vuex store
app.use(router)
app.mount('#app');  // Mount the app to the DOM





