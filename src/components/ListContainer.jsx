import React from 'react';
import DoneList from './DoneList';
import TodoLIst from './TodoLIst';

export default function ListContainer() {
  return (
    <>
      <TodoLIst></TodoLIst>
      <DoneList></DoneList>
    </>
  );
}
