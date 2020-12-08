<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

@font-face {
  font-family:'SF Pro Display';
  font-style:normal;
  font-weight:100;
  src:local('☺︎'), url("http://www.apple.com/wss/fonts/SF-Pro-Display/v1/sf-pro-display_ultralight.woff") format("woff"), url("http://www.apple.com/wss/fonts/SF-Pro-Display/v1/sf-pro-display_ultralight.ttf") format("truetype");
  /* (C) 2015 Apple Inc. All rights reserved.*/
}
</style>
