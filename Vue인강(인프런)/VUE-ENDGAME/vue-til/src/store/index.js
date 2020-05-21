import Vue from 'vue'; // vue를 들여오고
import Vuex from 'vuex'; // vuex를 들여오고

Vue.use(Vuex); // 플러그인 형태로 되어있기 때문에 먼저 Vuex를 설치. 초기화라고 보면 된다.

// vuex의 인스턴스를 export 하는 것.
export default new Vuex.Store({
  state: {
    username: '',
    token: '',
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
});
