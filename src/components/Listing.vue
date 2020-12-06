<template>
  <div class="listing">
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
  props: ['posts'],

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
