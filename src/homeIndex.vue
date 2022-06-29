<!--
 * @Author: 余林倩
 * @Date: 2022-06-28 14:18:03
 * @LastEditors: 余林倩
 * @LastEditTime: 2022-06-29 16:25:34
 * @Description: 请填写该文件的用途
-->
<template>
  <a-layout>
    <a-layout-sider width="300" style="background: #fff">
      <a-menu
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        :style="{ height: '100%', borderRight: 0 }"
        @click="handleClick"
      >
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              subnav 1
            </span>
          </template>
          <a-menu-item key="登记信息" @select="handleSelect"
            >登记信息</a-menu-item
          >
          <a-menu-item key="2">option2</a-menu-item>
          <a-menu-item key="3">option3</a-menu-item>
          <a-menu-item key="4">option4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <laptop-outlined />
              subnav 2
            </span>
          </template>
          <a-menu-item key="5">option5</a-menu-item>
          <a-menu-item key="6">option6</a-menu-item>
          <a-menu-item key="7">option7</a-menu-item>
          <a-menu-item key="8">option8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <notification-outlined />
              subnav 3
            </span>
          </template>
          <a-menu-item key="9">option9</a-menu-item>
          <a-menu-item key="10">option10</a-menu-item>
          <a-menu-item key="11">option11</a-menu-item>
          <a-menu-item key="12">option12</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>{{ title || "sub01" }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ con || "登记信息" }}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px',
        }"
      >
        Cont ent
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { message } from "ant-design-vue";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    const router = useRouter();
    const title = ref();
    const con = ref();
    const goHelloPage = () => {
      //router.push 能回退。会向 history 栈添加一个新的记录，点击后退按钮时，回到之前的 URL。
      //router.replace 不能回退。不会向history 添加新记录,替换掉当前的 history 记录。
      //router.push("/hello");
      //router.replace("/hello");
      //  http://localhost:8080/#/hello?type=add
      router.push({
        name: "HelloWorld",
        params: { id: "detail" },
        query: { type: "add" },
      });
      message.success("导出成功，请在浏览器左下方位置查看！");
    };
    const goChildPage = () => {
      router.push("/child");
    };
    const handleSelect = (key, selectedKeys) => {
      console.log(key, selectedKeys);
    };
    const handleClick = (e) => {
      console.log("click", e.keyPath);
      title.value = e.keyPath[0];
      con.value = e.keyPath[1];
    };
    return {
      title,
      con,
      handleClick,
      handleSelect,
      goHelloPage,
      goChildPage,
      value1: ref(),

      selectedKeys: ref(["登记信息"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
