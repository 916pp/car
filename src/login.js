import Vue from 'vue';

//import VueRouter from 'vue-router';
const login = require('./login.vue');
//Vue.use(VueRouter);
//const router = new VueRouter(require('./router'));  router: router,
new Vue({
    el: '#login',
    render: h => h(login)
});