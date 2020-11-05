<template>
  <header>
      <h1>{{ propsdata }}</h1>
      <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'], // 이 props의 명칭을 App.vue로 전달해 사용해서 위의 propsdata라는 데이터를 불러오는 것.
    methods: {
        sendEvent: function() {
            // this.$emit('') // 여기에 정의한 이벤트가 위쪽 컴포넌트(여기서는 App.vue)로 전달되는 것.
            this.$emit('renew')
        }
    }
}
</script>

<style>

</style>