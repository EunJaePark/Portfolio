// 테스트 유틸 라이브러리 로딩
import { shallowMount } from '@/vue/test-utils';
// 컴포넌트 로딩
import SignupForm from '@/components/SignupForm.spec';

describe('SignupForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메세지 뜸.', () => {
    // 내용 정의
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy;
  });

  test('ID와 PW, Nick name이 입력되지 않으면 회원가입 버튼이 비활성화 될 것이다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: '',
          password: '',
          nickname: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy;
  });
});

// describe('컴포넌트 이름', () => {
//   test('테스트 할 동작이나 기능', () => {
//     // 내용 정의
//   });
// });
