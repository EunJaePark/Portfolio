<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>

      <!-- id가 형식에 안맞을 경우 화면에 메세지 띄워줘 봄. -->
      <p v-if="!isUsernameValid && username !== ''" class="alert">
        {{ username }}는 사용할 수 없는 id입니다.
      </p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        console.log('폼 제출');
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        const { data } = await registerUser(userData); // 여기에는 api에서 작성했던 url은 적을 필요 없이 함수의 인자로 받은 data만 적어주면 된다.
        console.log(data.user.username);
        this.logMessage = `${data.user.username} 님이 가입되었습니다.`;
        this.initForm(); // input창을 clear해줌.
      } catch (error) {
        // console.log(error.response);
        this.logMessage = `${this.username}은 이미 가입된 id입니다. ${error}`;
      }
    },
    initForm() {
      this.username = ''; // ''대신 Null로 해도 되긴하다. 하지만 견고한 코드작성을 위해서는 타입시스템을 이해하면서 타입을 정의해주는게 버그를 줄일 수 있는 방법이다.
      this.password = '';
      this.nickname = '';
    },
    //   const userData = {
    //     username: this.username,
    //     password: this.password,
    //     nickname: this.nickname,
    //   };
    //   const { data } = await registerUser(userData);
    //   console.log(data.username);
    //   this.logMessage = `${data.username} 님이 가입되었습니다`;
    //   this.initForm();
    // },
    // initForm() {
    //   this.username = '';
    //   this.password = '';
    //   this.nickname = '';
    // },
  },
};
</script>

<style></style>
