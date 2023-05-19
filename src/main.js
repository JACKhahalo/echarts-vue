import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './global.css';
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

const pinia = createPinia();
pinia.use(piniaPluginPersist);
//import * as echarts from 'echarts';

const app = createApp(App);
//app.config.globalProperties.$echarts = echarts;
app.use(router);
app.use(pinia);

app.mount('#app');
//createApp(App).use(router).mount('#app');
