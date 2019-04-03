import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import VueRsource from 'vue-resource';

import {routes} from './routes.js';
import store from './store/store.js';

Vue.use(VueRouter);
Vue.use(VueRsource);

Vue.http.options.root = 'https://vuejs-stack-trader-7a599.firebaseio.com/';

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
