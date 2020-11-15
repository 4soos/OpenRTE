<template>
  <div>
    <el-menu mode="horizontal" router="true"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
             @select="handleSelect">
      <el-menu-item v-for="(item, i) in menuList"
                    :key="i"
                    :index="item.path">
        {{ item.menuItem }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menuList: [
        { path: '/',menuItem: 'Home' },
        { path: '/project_manage', menuItem: 'ProjectManage' },
        { path: '/data_type',menuItem: 'DataType' },
        { path: '/dbc',menuItem: 'DBC' },
        { path: '/port',menuItem: 'Port' },
        { path: '/nav_menu',menuItem: 'NavMenu' },
        { path: '/task', menuItem: 'Task' },
        { path: '/interfaces_mapping', menuItem: 'InterfacesMapping' },
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
