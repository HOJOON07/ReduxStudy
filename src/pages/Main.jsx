import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Start from './Start';
import MBTI from './MBTI';
import Show from './Show';

const MainStyle = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

export default function Main() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  return (
    <MainStyle>
      {page === 0 ? (
        <Start></Start>
      ) : page !== survey.length + 1 ? (
        <MBTI></MBTI>
      ) : (
        <Show></Show>
      )}
    </MainStyle>
  );
}
