import Vue from 'vue/dist/vue.esm';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.css';

Vue.use(ElementUI);
Vue.prototype.$bus = new Vue();
new Vue({
    el: '#app',
    render: h => h(App)
});
