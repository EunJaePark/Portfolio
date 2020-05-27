import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

// vuex의 인스턴스를 export 하는 것.
export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  // data를 바꾸는 것. 즉 state를 바꿈.
  mutations: {
    setUsername(state, username) {
      // murations의 첫 번째 인자는 state, 두 번째 인자는 setUsername을 호출할 때 넘길 값을 의미.
      state.username = username;
    },
    // username을 초기화 시켜줌. = logout
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    // LOGIN(context) { // context안에는 { commit }이 제공된다.
    async LOGIN({ commit }, userData) {
      // async는 무조건 promise가 리턴된다.
      // 하지만, 나중에 활용될 수도 있을 데이터 속성들을 위해서 마지막에 return data;를 넣어준다.(명시적인 의미에서)
      // loginUser();
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      // 이 파일이 store이기 때문에 this.$store를 지운다.

      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data;
    },
  },
});
