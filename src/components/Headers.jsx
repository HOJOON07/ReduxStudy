import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Headers() {
  const navigate = useNavigate();
  const gotoProfile = () => {
    navigate('/profile');
  };
  const gotoBoard = () => {
    navigate('/board');
  };
  const gotoRedux = () => {
    navigate('/test');
  };
  const goMbti = () => {
    navigate('/main');
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">메인페이지로 이동</Link>
          </li>
          <li>
            <a onClick={gotoProfile}>프로필로 이동</a>
          </li>
          <li>
            <a onClick={gotoBoard}>게시판으로 이동</a>
          </li>
          <li>
            <a onClick={gotoRedux}>리덕스로 이동</a>
          </li>
          <li>
            <a onClick={goMbti}>엠비티아이 검사 이동</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
