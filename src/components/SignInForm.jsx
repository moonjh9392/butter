import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserSignIn } from '../api/api';

const SignInForm = ({ SignUpOpen, SignInClose }) => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    UserSignIn(formData);
  };
  const handleSignUpOpen = () => {
    SignInClose();
    SignUpOpen();
  };
  return (
    <SignInComponent>
      <div>Login</div>
      <div>
        <label htmlFor="userId">아이디:</label>
        <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} required />
      </div>
      <div>
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
      <div>
        <button type="submit" onClick={handleSubmit}>
          Signin
        </button>
        |
        <button type="button" onClick={handleSignUpOpen}>
          Sign up
        </button>
      </div>
      <div>
        <button onClick={SignInClose}>X</button>
      </div>
    </SignInComponent>
  );
};

export default SignInForm;

const SignInComponent = styled.div`
  width: 659px;
  height: 378px;
  background-color: rgb(45, 45, 45);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: 'translate(-50%, -50%)';
  border-radius: '10px';
  box-shadow: '2px 2px 2px rgba(0, 0, 0, 0.25)';
  background-color: 'white';
`;
