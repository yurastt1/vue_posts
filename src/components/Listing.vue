<template>
  <div class="listing">
    <MainPost :post="MainPost" />
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
