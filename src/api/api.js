import { axiosInstance, USER_SIGN_UP, USER_SIGN_IN, USER_INFO } from './endpoints';

//회원가입
export const UserSignUp = async (data) => {
  try {
    // const response = await axiosInstance.post(USER_SIGN_UP, data);
    // console.log('회원가입 성공:', response.data);
    console.log(data);
  } catch (error) {
    console.error('회원가입 실패:', error);
  }
};

//로그인
export const UserSignIn = async (data) => {
  console.log(data);
  try {
    // const response = await axiosInstance.post(USER_SIGN_IN, data);
    // console.log('로그인 성공:', response.data);
    // //accessToken이 있는 경우
    // if (response.data.result) {
    //   // Axios 인스턴스의 defaults.headers.common 객체를 사용하여 Authorization 헤더 설정
    //   axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.result.accessToken;
    //   const refreshToken = response.data.result.refreshToken;
    //   UserInfo();
    // } else {
    //   //없는경우
    // }
  } catch (error) {
    console.error('로그인 실패:', error);
  }
};

//유저정보
export const UserInfo = async () => {
  try {
    const response = await axiosInstance.get(USER_INFO);

    console.log('로그인 성공:', response.data);
    if (response.data.result.imgUrl) {
      return axiosInstance.baseURL + response.data.result.imgUrl;
    }
  } catch (error) {
    console.error('로그인 실패:', error);
  }
};
