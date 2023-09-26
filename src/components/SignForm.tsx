import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserAuth } from '../api/api';
import { MODAL_SIGNIN, MODAL_SIGNUP, SignFormProps } from './MainTop';

const SignFormStyle = styled.div<{ current: string }>`
  ${(props) =>
    props.current === MODAL_SIGNIN
      ? `width: 30%;
  height: 40%;`
      : `width: 35%;
  height: 80%;`}

  background-color: rgb(45, 45, 45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: slideIn 0.3s ease-in-out;

  button {
    font-size: 0.7em;
  }
  .close_btn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.7em;
    margin: 10px;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const InputField = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    width: 35%;
  }

  input {
    padding: 2%;
    height: 2em;
    width: 35%;
    border-radius: 8px;
  }
`;

const Button = styled.button`
  color: gray;

  &:hover {
    color: white;
  }
`;

const JoinButton = styled.button`
  background-color: rgb(116, 119, 140);
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const GrayText = styled.span`
  color: gray;
`;

interface FormData {
  id: string;
  userId: string;
  password: string;
  passwordConfirm: string;
  userName: string;
  email: string;
  mobile: string;
}

const SignInForm = ({ current, setCurrent, toggleModal }: SignFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    id: '',
    userId: '',
    password: '',
    passwordConfirm: '', // 비밀번호 재확인을 위한 상태 추가
    userName: '',
    email: '',
    mobile: '',
  });

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    if (type === MODAL_SIGNUP) {
      // 유저 아이디 정규 표현식 검증
      const userIdRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/;

      if (!userIdRegex.test(formData.userId)) {
        alert('유저 아이디가 유효하지 않습니다. 영어와 숫자를 조합하여 6~15글자로 만들어주세요.');
        return;
      }
      // 비밀번호와 비밀번호 재확인 일치 여부 확인
      if (formData.password !== formData.passwordConfirm) {
        alert('비밀번호와 Re-Enter가 일치하지 않습니다.');
        return;
      }
      // formData에서 id,passwordConfirm 필드를 삭제하고 API로 보내기
      const { id, passwordConfirm, ...dataToSend } = formData;
      //SingUp API
      UserAuth(dataToSend, true);
    }
    if (type === MODAL_SIGNIN) {
      const { id, password } = formData;
      //SignIn API
      UserAuth({ id, password }, false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUpOpen = () => {
    setCurrent(MODAL_SIGNUP);
  };

  useEffect(() => {
    //Modal이 open 된상태에서 스크롤 작동 멈춤
    const body = document.body;
    if (body) {
      body.style.overflow = 'hidden';

      return () => {
        body.style.overflow = 'auto';
      };
    }
  }, []);

  return (
    <SignFormStyle current={current}>
      {current === MODAL_SIGNIN && (
        <>
          <InputField>Login</InputField>
          <InputField>
            <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} required />
          </InputField>
          <InputField>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <Button className="gray" type="submit" onClick={(e) => handleSubmit(e, MODAL_SIGNIN)}>
              Signin
            </Button>
            <GrayText>|</GrayText>
            <Button type="button" onClick={handleSignUpOpen}>
              Sign up
            </Button>
          </InputField>
        </>
      )}

      {current === MODAL_SIGNUP && (
        <>
          <InputField>Sign up</InputField>
          <InputField>
            <label htmlFor="userId">ID</label>
            <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} required />
          </InputField>
          <InputField>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <label htmlFor="passwordConfirm">Re-Enter</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </InputField>
          <InputField>
            <label htmlFor="mobile">Mobile</label>
            <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </InputField>
          <InputField>
            <JoinButton className="join_btn" type="submit" onClick={(e) => handleSubmit(e, MODAL_SIGNUP)}>
              Join Us
            </JoinButton>
          </InputField>
        </>
      )}
      <button className="close_btn" onClick={toggleModal}>
        X
      </button>
    </SignFormStyle>
  );
};

export default SignInForm;
