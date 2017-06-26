import Vue from 'vue';
import VueRouter from 'vue-router';
window.eventBus = new Vue();
const main = require('./main.vue');
Vue.use(VueRouter);
const router = new VueRouter(require('./router'));
router.replace('/purchase');

new Vue({
    el: '#main',
    router: router,
    render: h => h(main)
});