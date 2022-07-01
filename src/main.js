import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

//全局引入 Element Plus
import ElementPlus from 'element-plus'
//全局引入样式
import 'element-plus/dist/index.css'

//全局引入echarts
import 'echarts/lib/chart/line'
//引入各种组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import * as echarts from 'echarts'

const app =createApp(App)
app.config.globalProperties.$echarts = echarts
app.use(ElementPlus).use(store).use(router).mount("#app");
