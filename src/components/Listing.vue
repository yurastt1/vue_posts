<template>
  <div class="listing" v-if="posts.length > 0">
    <MainPost :post="MainPost" />
    <hr class="listing__breakline">
    <h1 class="listing__heading">All articles</h1>
    <AllPosts :posts="postsList" />
    <div class="am" v-observe-visibility="handleScroll">

    </div>
  </div>
</template>

<script>
import AllPosts from './AllPosts.vue';
import MainPost from './MainPost.vue';

export default {
  data() {
    return {
      posts: [],
      page: 1,
    };
  },

  methods: {
    async getPosts() {
      const posts = await fetch(`https://5f95a0992de5f50016ca20f5.mockapi.io/api/posts?p=${this.page}&l=10`)
        .then((response) => response.json());

      this.posts.push(...posts.items);
    },

    handleScroll(isVisible) {
      if (!isVisible) { return; }

      this.page += 1;
      this.getPosts();
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
      return this.posts[0];
    },
    postsList() {
      return this.posts.slice(1);
    },
  },
};
</script>

<style lang="scss">
  .listing {
    width: 640px;
    height: 100px;
    margin: 50px auto 0;
    text-align: center;
    font-family: "reneBeider";

    &__heading {
      margin-top: 64px;
    }

    & a {
      text-decoration: none;
      color: black;
      transition: 0.3s;

      &:hover {
        color:blue;
      }
    }

    &__breakline {
      height: 2px;
      color:black;
      background-color:black;
      margin-top: 34px
    }
  }

  .am {
    visibility: hidden;
    height: 1px;
  }

  @media screen and (max-width: 650px) {
    .listing {

      &__breakline {
        width: 100%;
      }
    }
  }
</style>
