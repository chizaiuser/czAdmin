<template>
  <div class="main-container">
    <cz-header :list="list" @handleUser="handleUser"></cz-header>
    <router-view />
    <cz-drawer></cz-drawer>
  </div>
</template>
<script lang="ts">
import CzHeader from './components/Header';
import CzDrawer from './components/Drawer';
export default {
  name: "app",
  components: {
    CzHeader,
    CzDrawer
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
    const handleUser = function () {
      console.log('ssssssss');
    }
    return {
      list,
      handleUser
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
.cz-tab-popover{
    min-width: 80px !important;
}
</style>
