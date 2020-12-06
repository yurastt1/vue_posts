<template>
  <div class="mainPost">
    <h1 class="mainPost__title">{{ post.title }}</h1>
    <h3>{{ post.subtitle }}</h3>
    <img class="mainPost__image" :src="post.image">
    <hr>
    <div v-html="post.description" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },

  methods: {
    async getPost() {
      const post = await fetch(`https://5f95a0992de5f50016ca20f5.mockapi.io/api/posts/${this.$route.params.id}`)
        .then((response) => response.json());

      this.post = post;
    },
  },

  mounted() {
    this.getPost();
  },
};
</script>
