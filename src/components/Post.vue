<template>
  <div class="mainPost">
    <h1 class="mainPost__title">{{ post.title }}</h1>
    <h3>{{ post.subtitle }}</h3>
    <img class="mainPost__image" :src="post.image">
    <hr class="mainPost__breakline">
    <div class="mainPost__description" v-html="post.description" />
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

<style lang="scss">
.mainPost {
  margin: 0 auto
}
  .mainPost__breakline {
      height: 2px;
      width: 640px;
      color:black;
      background-color:black;
      margin-top: 34px
  }

  .mainPost__description {
    width: 640px;
    margin: 0 auto;
  }

  @media screen and (max-width: 650px) {
    .mainPost {

      &__image {
        width: 100%;
      }

      &__breakline {
        width: 80%;
      }

      &__description {
        width: 100%;
        margin: 0 auto;
        text-align: left;
      }
    }
  }
</style>
