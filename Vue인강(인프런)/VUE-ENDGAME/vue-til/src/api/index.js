import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3000/'
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

// function registerUser(userData) {
//     const url = 'http://localhost:3000/signup'
//    return axios.post(url, userData); // function의 axios post의 결과가 promise이기 때문에 그 결과를 return해줘야 한다.
// }

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
