import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Board from './components/Board';
import BoardDetail from './components/BoardDetail';
import DoneList from './components/DoneList';
import Headers from './components/Headers';
import Home from './components/Home';
import ListContainer from './components/ListContainer';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import TestReducx from './components/TestReducx';
import TodoLIst from './components/TodoLIst';

const Router = () => {
  return (
    <>
      <TestReducx></TestReducx>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/board" element={<Board></Board>}></Route>
        <Route
          path="/board/:params"
          element={<BoardDetail></BoardDetail>}
        ></Route>
        <Route path="/err" element={<NotFound></NotFound>}></Route>
        <Route path="/test" element={<TestReducx></TestReducx>}></Route>
        <Route path="/todo" element={<TodoLIst></TodoLIst>}></Route>
        <Route path="/tododone" element={<DoneList></DoneList>}></Route>
        <Route
          path="/todolist"
          element={<ListContainer></ListContainer>}
        ></Route>
      </Routes>
    </>
  );
};

export default Router;
