<template>
  <div class="listing" v-if="posts.length > 0">
    <MainPost :post="MainPost" />
    <hr>
    <h1>All articles</h1>
    <AllPosts :posts="posts" />
  </div>
</template>

<script>
import AllPosts from './AllPosts.vue';
import MainPost from './MainPost.vue';

export default {

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
    },
  },

  mounted() {
    this.getPosts();
  },

  components: {
    MainPost,
    AllPosts,
  },

  computed: {
    MainPost() {
      // eslint-disable-next-line
      return this.posts.shift();
    },
  },
};
</script>

<style lang="scss">
  .listing {
    width: 640px;
    height: 100px;
    margin: auto;
  }

  hr {
    height: 2px;
    color:black;
    background-color:black;
  }
</style>
