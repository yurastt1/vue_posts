<template>
  <div class="postList">
    <div
      class="post"
      v-for="post in posts"
      :key="post.id"
    >
      <router-link :to="{ name: 'Post', params: { id: post.id }}">
        <img class="post__image" :src="post.image">
        <h1 class="post__title">{{ post.title }}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts'],
};
</script>

<style lang="scss">
  .postList {
    width: 640px;
    margin: 39px auto 0;
    display: flex;
    flex-wrap: wrap;
  }

  .post {
    width: 304px;
    margin-left: 15px;
    margin-top: 34px;

    &__image {
      width: 304px;
    }

    &__title {
      margin-top: 20px;
      font-size: 22px;
      font-weight: 500;
      line-height: 26.4px;
      font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    }
  }

  @media screen and (max-width: 650px) {
    .postList {
      flex-direction: column;
    }

    .post {
      margin: 42px auto;
    }
  }
</style>
