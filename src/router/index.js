import Vue from 'vue';
import VueRouter from 'vue-router';

import Post from '../components/Post.vue';
import Listing from '../components/Listing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Listing',
    component: Listing,
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
