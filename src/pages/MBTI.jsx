import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Progress from '../components/Progress';
import SkyblueButton from '../components/SkyblueButton';
import { next } from '../store/modules/mbti';
import { check } from '../store/modules/mbti';

const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;

const Vs = styled.p`
  font-size: 2em;
  padding-top: 1em;
`;
export default function MBTI() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);

  const dispatch = useDispatch();

  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, idx) => {
          return (
            <li key={idx}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(check(el.result));
                  dispatch(next());
                }}
              ></SkyblueButton>
              {idx === 0 && <Vs>Vs</Vs>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length}></Progress>
    </>
  );
}
