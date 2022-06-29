/*
 * @Author: 余林倩
 * @Date: 2022-06-28 14:06:16
 * @LastEditors: 余林倩
 * @LastEditTime: 2022-06-28 15:22:49
 * @Description: 请填写该文件的用途
 */
import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "../views/home/HelloWorld.vue";
import homeIndex from "../views/home/homeIndex.vue";
import childIndex from "../views/home/childIndex.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      name: "HelloWorld",
      path: "/hello/:id",
      component: HelloWorld,
    },
    {
      name: "homeIndex",
      path: "/home",
      component: homeIndex,
    },
    {
      name: "childIndex",
      path: "/child",
      component: childIndex,
    },
  ],
});

export default router;
