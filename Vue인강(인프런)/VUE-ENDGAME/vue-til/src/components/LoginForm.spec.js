import { shallowMount } from '@vue/test-utils'; // vue공식 util test라이브러리를 import해준다.
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메세지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    console.log(warningText.html());

    // warningText가 존재한다고 가정하고, 무조건 true일 것이다 라는 의미.
    // exists()는 있으면 true, 없으면 false를 반환한다.
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    // button.element.disabled
    // username, password에 초기값만 들어가 있는 경우에는 disabled값이 true가 되지!.
    expect(button.element.disabled).toBeTruthy();
  });
});
