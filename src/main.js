/*
 * @Author: 余林倩
 * @Date: 2022-06-28 14:04:52
 * @LastEditors: 余林倩
 * @LastEditTime: 2022-06-29 09:21:02
 * @Description: 请填写该文件的用途
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { Button, DatePicker, Layout, Menu } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "ant-design-vue/lib/button/style";
import "ant-design-vue/lib/date-picker/style/css"; // 加载 CSS
import "ant-design-vue/lib/button/style/css";
import "ant-design-vue/lib/layout/style/css";
import "ant-design-vue/lib/menu/style/css";
const app = createApp(App);
app.use(Button);
app.use(DatePicker);
app.use(Layout);
app.use(Menu);
app.use(router).mount("#app");
