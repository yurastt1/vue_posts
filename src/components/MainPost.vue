<template>
  <div class="mainPost">
    <img class="mainPost__image" :src="post.image">
    <h1 class="mainPost__title">{{ post.title }}</h1>
    <h3>{{ post.subtitle }}</h3>
  </div>
</template>

<script>
export default {
  props: ['post'],

  components: {

  },
};
</script>

<style lang="scss">
  .mainPost {
    width: 640px;
    margin: auto;

    &__title {
    }
  }
</style>
