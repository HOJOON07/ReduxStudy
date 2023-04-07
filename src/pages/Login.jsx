import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/modules/user';
import axios from 'axios';

export default function Login() {
  const registerInput = useRef();
  const registerPwInput = useRef();

  const dispatch = useDispatch();

  const registerUser = async () => {
    if (!registerInput.current.value || !registerPwInput.current.value)
      return alert('필수 값을 입력해 주세요');

    // const resRegister = await fetch('http://localhost:5500/user/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     id: registerInput.current.value,
    //     password: registerPwInput.current.value,
    //   }),
    // });
    // if (resRegister.status !== 200) return alert(await resRegister.json());
    // alert(await resRegister.json());
    // dispatch(
    //   login({
    //     id: registerInput.current.value,
    //     password: registerPwInput.current.value,
    //   })
    // );
    const resRegister = await axios.post(
      'http://localhost:5500/user/register',
      {
        id: registerInput.current.value,
        password: registerPwInput.current.value,
      }
    );
    if (resRegister.status !== 200) return alert(resRegister);
    alert(resRegister);
    dispatch(
      login({
        id: registerInput.current.value,
        password: registerPwInput.current.value,
      })
    );
  };
  return (
    <>
      {/* 로그인 */}
      <h1>로그인 파트입니다</h1>
      아이디: <input type="text" />
      <br />
      <br />
      비밀번호: <input type="password" />
      <br />
      <br />
      <button>로그인</button>
      <Link to="">카카오 로그인</Link>
      {/* 회원가입 */}
      <h1>회원가입 파트입니다</h1>
      아이디: <input type="text" ref={registerInput} />
      <br />
      <br />
      비밀번호: <input type="password" ref={registerPwInput} />
      <br />
      <br />
      <button onClick={registerUser}>회원가입</button>
    </>
  );
}
