import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', // mode는 해시 값(#)관련된 설정.
  routes: [
    // 각각의 페이지 관련된 route정보들을 저장.
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
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: { auth: true }, // auth는 임의로 정한 속성 이름. 다르게 지을 수도 있다.
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// to: 이동하려는 페이지, from: 어디서부터 왔는지(현재페이지), next: 다음페이지로 넘어갈 수 있게 호출하는 API
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    //store.getters.isLogin: 사용자가 로그인 했는지 확인할 수 있는 값 가져옴.
    console.log('인증이 필요합니다.');
    next('/login');
    return; // login을 하고나서 아래의 next()가 다시 실행되지 않도록 return을 해줘야 한다!!!!
  }
  next(); // next를 호출해줘야지만 다음페이지로 넘어갈 수 있다!!
});

export default router;
