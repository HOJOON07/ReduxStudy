import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const weight = useSelector((state) => state.weightReducer);
  return (
    <>
      <h1>프로필 페이지입니다.</h1>
      <h2>그리고 몸무게는 {weight}</h2>
    </>
  );
}
