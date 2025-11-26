import { createRouter, createWebHistory } from 'vue-router'

// A simple component for the home page
const Home = { template: '<div class="p-4">Welcome to your Vue.js application!</div>' }

const routes = [
  { path: '/', name: 'Home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
