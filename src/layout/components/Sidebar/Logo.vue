<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link key="collapse" class="sidebar-logo-link" to="/">
        <img :src="logo" class="sidebar-logo" />
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SidebarLogo",
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title: "Vue Admin Template",
      logo: "http://likede2-admin.itheima.net/img/logo.3673fab5.png",
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

// 去除logo背景色
.sidebar-logo-container {
  position: relative;
  width: 210px !important;
  height: 60px;
  line-height: 60px;
  // background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    background-color: #5373e0;

    // 大图样式
    .sidebar-logo {
      width: 80px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  // 小图样式
  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
      width: 32px;
      height: 32px;
    }
  }
}
</style>
