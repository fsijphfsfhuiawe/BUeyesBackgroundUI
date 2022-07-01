import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

//全局引入 Element Plus
import ElementPlus from 'element-plus'
//全局引入样式
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
