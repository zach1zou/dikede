<template>
     <div :class="{'has-logo':showLogo}">
       <!-- 左侧logo -->
       <logo v-if="showLogo" :collapse="isCollapse" />
       <el-scrollbar wrap-class="scrollbar-wrapper">
         ...
       </el-scrollbar>
     </div>
   </template>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return false;
    },
  },
};
</script>
<style lang="scss" scoped></style>
