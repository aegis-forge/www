import HomePage from '../pages/HomePage.vue'
import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage }
  ],
})

export default router
