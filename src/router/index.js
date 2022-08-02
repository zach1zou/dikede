import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "帝可得", icon: "el-icon-s-home" },
      },
      {
        path: "/sheet",
        component: Layout,
        redirect: "/sheet/table",
        name: "Sheet",
        meta: { title: "工单管理", icon: "el-icon-s-order" },
        children: [
          {
            path: "table",
            name: "Table",
            component: () => import("@/views/table/index"),
            meta: { title: "运营工单" },
          },
          {
            path: "tree",
            name: "Tree",
            component: () => import("@/views/tree/index"),
            meta: { title: "运维工单" },
          },
        ],
      },

      {
        path: "/node",
        component: Layout,
        redirect: "/node",
        name: "Node",
        meta: { title: "点位管理", icon: "el-icon-place" },
        children: [
          {
            path: "index",
            name: "Form",
            component: () => import("@/views/node/index"),
            meta: { title: "区域管理" },
          },
          {
            path: "index",
            name: "Form",
            component: () => import("@/views/node/index"),
            meta: { title: "点位管理" },
          },
          {
            path: "index",
            name: "Form",
            component: () => import("@/views/node/index"),
            meta: { title: "合作商管理" },
          },
        ],
      },
      {
        path: "/serve",
        component: Layout,
        redirect: "/serve",
        name: "Serve",
        meta: {
          title: "设备管理",
          icon: "el-icon-receiving",
        },
        children: [
          {
            path: "menu1",
            component: () => import("@/views/serve/index"),
            name: "Menu1",
            meta: { title: "设备管理" },
          },
          {
            path: "menu2",
            component: () => import("@/views/serve/index"),
            name: "Menu2",
            meta: { title: "设备状态" },
          },
          {
            path: "menu3",
            component: () => import("@/views/serve/index"),
            name: "Menu3",
            meta: { title: "设备类型管理" },
          },
        ],
      },
      {
        path: "/user",
        component: Layout,
        redirect: "/user",
        name: "User",
        meta: {
          title: "人员管理",
          icon: "el-icon-s-custom",
        },
        children: [
          {
            path: "menu1",
            component: () => import("@/views/user/index"),
            name: "Menu1",
            meta: { title: "人员列表" },
          },
          {
            path: "menu2",
            component: () => import("@/views/user/index"),
            name: "Menu2",
            meta: { title: "人效统计" },
          },
          {
            path: "menu3",
            component: () => import("@/views/user/index"),
            name: "Menu3",
            meta: { title: "工作量列表" },
          },
        ],
      },
      {
        path: "/goods",
        component: Layout,
        redirect: "/goods",
        name: "Goods",
        meta: {
          title: "商品管理",
          icon: "el-icon-present",
        },
        children: [
          {
            path: "menu1",
            component: () => import("@/views/goods/index"),
            name: "Menu1",
            meta: { title: "商品类型" },
          },
          {
            path: "menu2",
            component: () => import("@/views/goods/index"),
            name: "Menu2",
            meta: { title: "商品管理" },
          },
        ],
      },
      {
        path: "/strategy",
        component: () => import("@/views/strategy/index"),
        name: "Strategy",
        meta: { title: "策略管理", icon: "el-icon-s-opportunity" },
      },
      {
        path: "/order",
        component: () => import("@/views/order/index"),
        name: "Order",
        meta: { title: "订单管理", icon: "el-icon-document-copy" },
      },
      {
        path: "/bill",
        component: () => import("@/views/bill/index"),
        name: "Bill",
        meta: { title: "对账统计", icon: "el-icon-notebook-2" },
      },
    ],
  },

  // {
  //   path: "external-link",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "https://panjiachen.github.io/vue-element-admin-site/#/",
  //       meta: { title: "External Link", icon: "link" },
  //     },
  //   ],
  // },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
