<template>
  <!-- <el-container> -->
    <!-- <el-aside width="200px"> -->
    <!-- <el-menu class="el-menu-vertical-demo"> -->
    <!-- <template v-for="(item, index) in tableList"> -->
    <!-- <el-menu-item :index="item.key" @click="go(item.path)"> -->
    <!-- <span>{{ item.name }}</span> -->
    <!-- </el-menu-item> -->
    <!-- </template> -->
    <!-- </el-menu> -->
    <!-- </el-aside> -->
    <!-- <el-main> -->
      <router-view />
    <!-- </el-main> -->
  <!-- </el-container> -->
</template>

<script>
import {
  ElAside,
  ElButton,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from 'element-plus';
import { useRouter } from 'vue-router';

export default {
  components: [
    ElButton,
    ElContainer,
    ElAside,
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    ElMenuItemGroup,
  ],
  name: 'App',
  data() {
    const tableList = [
      {
        name: '1',
        key: '1',
        path: '/tables-jack/table1',
      },
      {
        name: '2',
        key: '2',
        path: '/tables-jack/table2',
      },
      {
        name: '3',
        key: '3',
        path: '/tables-jack/table3',
      },
      {
        name: '4',
        key: '4',
        path: '/tables-jack/table4',
      },
      {
        name: '5',
        key: '5',
        path: '/tables-jack/table5',
      },
      {
        name: '6',
        key: '6',
        path: '/tables-jack/table6',
      },
      {
        name: '7',
        key: '7',
        path: '/tables-jack/table7',
      },
    ];
    const router = useRouter();
    function go(pathName) {
      router.push({
        path: pathName,
      });
    }

    return { go, tableList };
  },
};
</script>
<style>
.el-main {
  background-color: rgb(255, 255, 255);
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-aside {
  height: 100%;
  display: none;
}
</style>
