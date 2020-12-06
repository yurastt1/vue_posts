<template>
  <div id="app">
    <Listing :posts='posts' />
  </div>
</template>

<script>
import Listing from './components/Listing.vue';

export default {
  name: 'App',

  components: {
    Listing,
  },

  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getPosts() {
      const posts = await fetch('https://5f95a0992de5f50016ca20f5.mockapi.io/api/posts')
        .then((response) => response.json());

      this.posts = posts.items;

      console.log(this.posts[0]);
    },
  },

  mounted() {
    this.getPosts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
