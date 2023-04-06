import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MBTI from './pages/MBTI';
import Show from './pages/Show';
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
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  return (
    <Main>
      {page === 0 ? (
        <Start></Start>
      ) : page !== survey.length + 1 ? (
        <MBTI></MBTI>
      ) : (
        <Show></Show>
      )}
    </Main>
  );
}
