import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   // headers와 Authorization 속성들은 기본적으로 정의 된 HTTP 헤더의 속성이다.
    //   Authorization: store.state.token,
    // },
  });
  return setInterceptors(instance);
  // instance라는 이름은 이 함수 속에서만 존재하기 때문에, return값으로 처리해 줘서 해당 함수 바깥에서도 사용가능하도록 해준 것.
}
const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
