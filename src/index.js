import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Modal } from 'bootstrap-vue/es/components'

//Store
import nodeStatus from './store/node_status'
import wallet from './store/wallet'

import App from './App'

Vue.use(Vuex);
Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.use(Modal);

const store = new Vuex.Store({
    modules: {
        nodeStatus,
        wallet,
        history
    }
});

const router = new VueRouter(routes);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
})
  