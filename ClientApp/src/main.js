import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import './assets/css/custom/default.css'

//import Router from './router';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.config.productionTip = false
//Vue.prototype.$baseapiurl='https://localhost:5001/'
Vue.prototype.$baseapiurl='/'
Vue.prototype.$rosterId=0
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
const router = new VueRouter({routes});
new Vue({
  vuetify,router,
  render: h => h(App),
  
  
}).$mount('#app')


