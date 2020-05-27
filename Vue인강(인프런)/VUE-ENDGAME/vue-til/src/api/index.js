import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 단순히 기본url만 생성해주는 함수.
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 액시오스 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // headers: {
    //   // headers와 Authorization 속성들은 기본적으로 정의 된 HTTP 헤더의 속성이다.
    //   Authorization: store.state.token,
    // },
  });
  return setInterceptors(instance);
  // instance라는 이름은 이 함수 속에서만 존재하기 때문에, return값으로 처리해 줘서 해당 함수 바깥에서도 사용가능하도록 해준 것.
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');

// CREATE - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}
