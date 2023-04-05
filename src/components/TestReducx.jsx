import React, { Children } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TestReducx() {
  const weight = useSelector((state) => state.weigth);
  const todo = useSelector((state) => state.todo);
  console.log(weight);
  const dispatch = useDispatch();

  return (
    <>
      <h1>당신의 몸무게는 {weight}</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        빼기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '살빼기' });
        }}
      >
        살빼기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '살찌기' });
        }}
      >
        살찌기
      </button>
    </>
  );
}
