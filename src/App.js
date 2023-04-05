import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MBTI from './pages/MBTI';
import Start from './pages/Start';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

export default function App() {
  const page = useSelector((state) => state.mbti.page);
  return <Main>{page === 0 ? <Start></Start> : <MBTI></MBTI>}</Main>;
}
