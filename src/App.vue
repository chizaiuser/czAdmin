<template>
  <div class="main-container">
    <cz-header :list="list" @handleUser="handleUser"></cz-header>
    <router-view />
    <cz-drawer 
      v-model="visible"
      custom-class="user-drawer"
    >
      <template #content>
        <cz-user></cz-user>
      </template>
    </cz-drawer>
  </div>
</template>
<script lang="ts">
import CzHeader from './components/Header';
import CzDrawer from './components/Drawer';
import CzUser from './components/User';
import { ref } from 'vue';
export default {
  name: "app",
  components: {
    CzHeader,
    CzDrawer,
    CzUser
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
    const visible = ref(false);
    const handleUser = function () {
      visible.value = true;
    }
    return {
      list,
      handleUser,
      visible
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
.user-drawer{
  height: 70%;
}
</style>
