import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter); 

export default new VueRouter({
    mode: 'history',
    routes: [ // vue router에 의해서 제어되는 페이지의 정보를 담는 배열.
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage.vue'),
        },
        {
            path: '*', // *은 위의 path를 제외한 나머지 모든 url에 대해 반응하겠다는 것.
            component: () => import('@/views/NotFoundPage.vue')
        },
    ], 
});