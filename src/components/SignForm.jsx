import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserSignIn, UserSignUp } from '../api/api';

const SignInForm = ({ current, setCurrent, toggleModal }) => {
  const [formData, setFormData] = useState({
    id: '',
    userId: '',
    password: '',
    passwordConfirm: '', // 비밀번호 재확인을 위한 상태 추가
    userName: '',
    email: '',
    mobile: '',
  });

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'signup') {
      // 유저 아이디 정규 표현식 검증
      const userIdRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/;

      if (!userIdRegex.test(formData.userId)) {
        alert('유저 아이디가 유효하지 않습니다. 영어와 숫자를 조합해주세요.');
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
      UserSignUp(dataToSend);
    }
    if (type === 'signin') {
      const { id, password, ...rest } = formData;
      //SignIn API
      UserSignIn({ id, password });
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
    setCurrent('signup');
  };

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <SignFormStyle current={current}>
      {current === 'signin' && (
        <>
          <div>Login</div>
          <div>
            <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} required />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="gray">
            <button className="gray" type="submit" onClick={(e) => handleSubmit(e, 'signin')}>
              Signin
            </button>
            {'|'}
            <button type="button" onClick={handleSignUpOpen}>
              Sign up
            </button>
          </div>
        </>
      )}

      {current === 'signup' && (
        <>
          <div>Sign up</div>
          <div>
            <label htmlFor="userId">ID</label>
            <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm">Re-Enter</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </div>
          <div>
            <button className="join_btn" type="submit" onClick={(e) => handleSubmit(e, 'signup')}>
              Join Us
            </button>
          </div>
        </>
      )}
      <button className="close_btn" onClick={toggleModal}>
        X
      </button>
    </SignFormStyle>
  );
};

export default SignInForm;
const SignFormStyle = styled.div`
  ${(props) =>
    props.current === 'signin'
      ? `width: 30%;
  height: 40%;`
      : `width: 35%;
  height: 65%;`}

  background-color: rgb(45, 45, 45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: slideIn 0.3s ease-in-out;
  div {
    margin: 10px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    padding: 2%;
    height: 2em;
    width: 50%;
    border-radius: 8px;
  }
  button {
    font-size: 0.7em;
    color: gray;
  }
  button:hover {
    color: white;
  }
  label {
    width: 150px;
  }
  .gray {
    color: gray;
  }
  .close_btn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.7em;
    margin: 10px;
  }

  .join_btn {
    background-color: rgb(116, 119, 140);
    color: white;
    border-radius: 8px;
    padding: 8px 16px;
  }
  .join_btn:hover {
    opacity: 0.5;
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
