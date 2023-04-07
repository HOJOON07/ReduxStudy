import React from 'react';
import { useSelector } from 'react-redux';
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
import Login from './pages/Login';
import Main from './pages/Main';
import Start from './pages/Start';

const Router = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <>
      <Headers></Headers>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Main></Main> : <Login></Login>}
        ></Route>
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
        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="/todolist"
          element={<ListContainer></ListContainer>}
        ></Route>
        <Route path="/main" element={<Main></Main>}></Route>
      </Routes>
    </>
  );
};

export default Router;
