import React from 'react';
import { useSelector } from 'react-redux';

export default function DoneList() {
  const doneList = useSelector((state) => state.todo.toDoList);
  return (
    <section>
      <h1>완료된 목록</h1>
      <ul>
        {doneList.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </section>
  );
}
