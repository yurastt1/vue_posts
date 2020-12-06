<template>
  <div class="postList">
    <div class="post" v-for="post in posts" :key="post.id">
      <img class="post__image" :src="post.image">
      <h1 class="post__title">{{ post.title }}</h1>
      <h3>{{ post.subtitle }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts'],

  components: {

  },
};
</script>

<style lang="scss">
  .postList {
    width: 640px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    &__title {
    }

    .post {
      width: 304px;
      margin-left: 15px;

      &__image {
        width: 304px;
      }
    }
  }
</style>
