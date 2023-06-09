import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../store/modules/todo';
import { done } from '../store/modules/todo';

export default function TodoLIst() {
  const list = useSelector((state) => state.todo.toDoList);
  // const list = useSelector((state) => state.todo.toDoList).filter(
  //   (item) => item.done == false
  // );
  // const nextID = useSelector((state) => state.todo.nextID);
  const dispatch = useDispatch();
  const todoList = list.filter((item) => item.done == false);

  const input = useRef();
  // const value = input.current.value;

  return (
    <section>
      <h1>할일 목록</h1>
      <div>
        <input type="text" ref={input} />
        <button
          onClick={() => {
            dispatch(create({ id: list.length, text: input.current.value }));
            input.current.value = '';
          }}
        >
          추가
        </button>
        {/* <button
          onClick={() => {
            dispatch(create({ id: nextID, text: input.current.value }));
            input.current.value = '';
          }}
        >
          추가
        </button> */}
      </div>
      <ul>
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button
                onClick={() => {
                  dispatch(done(el.id));
                }}
              >
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
