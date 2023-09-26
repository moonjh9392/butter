import { axiosInstance, USER_SIGN_UP, USER_SIGN_IN, USER_INFO } from './endpoints';
import { AxiosResponse } from 'axios';

// 회원가입 및 로그인
export const UserAuth = async <T>(data: T, isSignUp: boolean): Promise<void> => {
  try {
    const response: AxiosResponse = await axiosInstance.post(isSignUp ? USER_SIGN_UP : USER_SIGN_IN, data);
    console.log(isSignUp ? '회원가입 성공:' : '로그인 성공:', response.data);
    console.log(data);

    if (isSignUp) {
      // 회원가입인 경우 추가 로직 수행
      return response.data;
    } else {
      // 로그인인 경우 추가 로직 수행
      if (response.data.result) {
        // accessToken이 있는 경우 헤더에 세팅
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.result.accessToken;
        //액세스 토큰 세션 스토리지에 세팅하여 유저 세션 확인
        sessionStorage.setItem('accessToken', response.data.result.accessToken);
        //리프레시 토큰 로컬스토리지에 세팅 필요할때 꺼내서 서버에 전송
        localStorage.setItem('refreshToken', response.data.result.refreshToken);

        await UserInfo();
      } else {
        // 없는 경우
      }
    }
  } catch (error) {
    console.error(isSignUp ? '회원가입 실패:' : '로그인 실패:', error);
  }
};

// 유저정보
export const UserInfo = async (): Promise<void> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(USER_INFO);
    console.log('로그인 성공:', response.data);
    if (response.data.result.imgUrl) {
      // return axiosInstance.baseURL + response.data.result.imgUrl;
    }
  } catch (error) {
    console.error('로그인 실패:', error);
  }
};
