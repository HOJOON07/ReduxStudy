import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Board() {
  const naviagte = useNavigate();
  const gotoOne = () => {
    naviagte('/1');
  };
  return (
    <>
      <h1>게시판 페이지입니다.</h1>
      <Link to="1">
        <h2>게시글 1번 보여주기</h2>
      </Link>
      <Link to="2">
        <h2>게시글 2번 보여주기</h2>
      </Link>
    </>
  );
}
