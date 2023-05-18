<template>
  <el-container>
    <el-aside width="200px">
      <el-menu class="el-menu-vertical-demo">
        <template v-for="(item, index) in tableList">
          <el-menu-item :index="item.key" @click="go(item.path)">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
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
        path: 'table1',
      },
      {
        name: '2',
        key: '2',
        path: 'table2',
      },
      {
        name: '3',
        key: '3',
        path: 'table3',
      },
      {
        name: '4',
        key: '4',
        path: 'table4',
      },
      {
        name: '5',
        key: '5',
        path: 'table5',
      },
      {
        name: '6',
        key: '6',
        path: 'table6',
      },
      {
        name: '7',
        key: '7',
        path: 'table7',
      },
    ];
    const router = useRouter();
    function go(pathName) {
      router.push({
        name: pathName,
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
}
</style>
