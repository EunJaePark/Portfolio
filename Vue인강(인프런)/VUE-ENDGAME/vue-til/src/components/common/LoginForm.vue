<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button v-bind:disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form value
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username); // this.username의 값이 한글자 한글자 바뀔 때마다 validateEmail함수가 실행 될 것이다.
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비지니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        // 메인 페이지로 이동
        console.log('이거 왜 안찍혀 뭐야뭐야!!!!!');
        this.$router.push('/main'); // js에서 이동하는 태그.
        // <router-link to="main">을 의미한다.  // html에서 이동하는 앵커 태그.

        // this.logMessage = `${data.user.username} 님 환영합니다.`;
        // this.initForm();
      } catch (error) {
        // 에러를 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
        // this.initForm();
      } finally {
        // initForm()을 실행하는 것은 어디에서 해도 상관없다. 상황에 맞춰 넣어주면 된다. 하지만 둘이 중복된다 싶을 때에는 finally를 뒤에 만들어서 넣어주는 방법이 좋다.
        this.initForm();
      }
    },
    // 로그인 input창 비워줌.
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
