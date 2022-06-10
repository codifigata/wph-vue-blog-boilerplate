import { createRouter, createWebHistory } from 'vue-router';

// 1. Define route components.
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';

// 2. Define some routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/post/:id', name: 'Post', component: Post },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)', name: '404', component: NotFound },
];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
