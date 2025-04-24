import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import Todoapp from "../views/Todoapp.vue";
import { useAuthStore } from "../store/auth";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/todo",
    component: Todoapp,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  const isAuthenticated = localStorage.getItem("isLoggedIn");
  console.log("isAuthenticated: ", isAuthenticated) ;
  if (isAuthenticated== "false" && to.path != '/login') {
    // console.log("1")
    next("/login");
  } else {
    console.log("2")
    next();
  }
});

export default router;





