import { axiosInstance, USER_SIGN_UP, USER_SIGN_IN, USER_INFO } from './endpoints';
import { AxiosError, AxiosResponse } from 'axios';

// 회원가입 및 로그인
export const UserAuth = async <T>(data: T, isSignUp: boolean): Promise<AxiosResponse | AxiosError> => {
  try {
    const response: AxiosResponse = await axiosInstance.post(isSignUp ? USER_SIGN_UP : USER_SIGN_IN, data);

    if (isSignUp) {
      // 회원가입인 경우 추가 로직 수행
      return response.data;
    } else {
      // 로그인인 경우 추가 로직 수행
      if (response.data.result.accessToken) {
        // accessToken이 있는 경우 헤더에 세팅
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.result.accessToken;
        //액세스 토큰 세션 스토리지에 세팅하여 유저 세션 확인
        sessionStorage.setItem('accessToken', response.data.result.accessToken);
        //리프레시 토큰 로컬스토리지에 세팅 필요할때 꺼내서 서버에 전송
        localStorage.setItem('refreshToken', response.data.result.refreshToken);

        const result = await UserInfo();
        return result;
      } else {
        throw new Error('undefined accessToken');
      }
    }
  } catch (error) {
    alert(isSignUp ? '회원가입 실패' : '로그인 실패'); // 에러 메시지를 알림으로 표시
    return error;
  }
};

// 유저정보
export const UserInfo = async (): Promise<AxiosResponse | AxiosError> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(USER_INFO);
    if (response.data.result.imgUrl) {
      //이미지 url 세션에 저장
      sessionStorage.setItem('imgUrl', response.data.result.imgUrl);
      return response.data;
    } else {
      throw new Error('undefined imgUrl');
    }
  } catch (error) {
    return error;
  }
};
