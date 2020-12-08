<template>
  <router-link
    class="mainPost"
    :to="{ name: 'Post', params: { id: post.id }}"
  >
    <img class="mainPost__image" :src="post.image">
    <h1 class="mainPost__title">{{ post.title }}</h1>
    <h3 class="mainPost__subtitle">{{ post.subtitle }}</h3>
  </router-link>
</template>

<script>
export default {
  props: ['post'],
};
</script>

<style lang="scss">
  .mainPost {
    text-align: center;

    &__title {
      margin-top: 44px;
    }

    &__subtitle {
      margin-top: 32px;
    }
  }
</style>
