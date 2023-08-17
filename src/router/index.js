// Import the necessary modules
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Define the home route
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
});

// Export the router instance
export default router;