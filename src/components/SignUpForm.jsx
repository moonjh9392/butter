import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserSignUp } from '../api/api';

const SignUpForm = ({ SignInOpen, SignUpClose }) => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    passwordConfirm: '', // 비밀번호 재확인을 위한 상태 추가
    userName: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    // formData에서 passwordConfirm 필드를 삭제하고 API로 보내기
    const { passwordConfirm, ...dataToSend } = formData;

    UserSignUp(dataToSend);

    return handleJoinUs();
  };

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);
  const handleJoinUs = () => {
    SignUpClose();
    SignInOpen();
  };
  return (
    <SignUpComponent>
      <div>Sign up</div>
      <div className="content">
        <label htmlFor="userId">아이디:</label>
        <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} required />
      </div>
      <div className="content">
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="content">
        <label htmlFor="passwordConfirm">Re-Enter:</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          required
        />
      </div>
      <div className="content">
        <label htmlFor="userName">회원 이름:</label>
        <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required />
      </div>
      <div className="content">
        <label htmlFor="email">이메일:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="content">
        <label htmlFor="mobile">휴대폰번호:</label>
        <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Join Us
        </button>
      </div>
      <div>
        <button onClick={SignUpClose}>X</button>
      </div>
    </SignUpComponent>
  );
};

export default SignUpForm;

const SignUpComponent = styled.div`
  width: 728px;
  height: 754px;
  background-color: rgb(45, 45, 45);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  transform: 'translate(-50%, -50%)';
  border-radius: '10px';
  box-shadow: '2px 2px 2px rgba(0, 0, 0, 0.25)';
  background-color: 'white';

  .content {
    display: flex;
    justify-content: space-between;
  }
`;
