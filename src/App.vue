<template>
  <div class="main-container">
    <cz-header :list="list"></cz-header>
    <router-view />
  </div>
</template>
<script lang="ts">
import { ref, unref } from "vue";
import CzHeader from './components/Header';
export default {
  name: "app",
  components: {
    CzHeader
  },
  setup() {
    let list = [
      {
        name: '首页',
        url: '/'
      },
      {
        name: '文章',
        url: '/article'
      },
      {
        name: '留言',
        url: '/communication'
      },
      {
        name: '生活馆',
        url: '/communication'
      }
    ]
    return {
      list
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
