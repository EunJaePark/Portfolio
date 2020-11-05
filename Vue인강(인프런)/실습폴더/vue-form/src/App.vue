<template>
  <form v-on:submit.prevent="submitForm">
    <!-- <button>에서부터 이벤트 버블링이 일어나기 때문에, submit이라는 이벤트를 받으면 submitFrom이라는 함수가 실행되라는 명령어를 <form>에 입력해주면 된다.
    (굳이 <button>에 작성할 필요가 없어지는 것. 이벤트 버블링의 효과!) -->
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username"> <!--v-model로 연결해주면 input에 내용을 입력할 때마다 username을 이용해서 바로 username데이터에 연결해준다. 또한 username내용을 바로 화면으로 보이게 해주는 투웨이바인딩이라는 기능을 이용하는 것. -->
      <!--lable의 for와 input의 id를 같게 지어주면 위의 label이 이름이 같은 애를 바라보게 된다.-->
      <!-- lable의 for는 어떤 태그를 바라보는가를 의미하는 것. -->
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit" >login</button>
    <!-- <button>을 클릭하거나 type="submit"라고 작성하면 버튼을 클릭했을 때, <input>에서의 엔터까지 위의 <form>으로 올라가서 이벤트 버블링이 작동함. -->
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '',  // null로 해도 상관 없지만, 값으로 string이 들어올 것이라는 것을 미리 고민하고 생각하도록 ''(빈 문자열)로 해둠.
      password: '',
    }
  },
  methods: {
    submitForm: function(/*event*/) {
      // event.preventDefault();  
      // <form>은 기본적으로 새로고침 기능을 가지고 있기 떄문에, preventDefault를 이용해서 새로고침을 무력화시켜주는 것.
      // 하지만 이 방법은 바닐라 자바스크립트에서 사용하던 것. vue를 이용하려면 해당 함수를 실행시키는 부분에가서 .prevent를 붙여주면 된다.
      console.log(this.username, this.password);
          
      var url = 'https://jsonplaceholder.typicode.com/users';  // 이 url로 데이터를 보내고 결과를 받을 수 있음.
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)  // post()의 규칙은 url을 보내고 그 뒤에 data를 보내면 된다.
        .then(function(response) {
          console.log(response);
          
        })
        .catch(function(err) {
          console.log(err);
          
        });
    }
  }
}
</script>

<style>

</style>