import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { reset } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;

const Explanation = styled.p`
  font-size: 1.5em;
  color: #777;
`;

const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;

const Addtional = styled.p`
  font-size: 2em;
  color: orange;
`;

const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector((state) => state.mbti.explanation[result]);

  const dispatch = useDispatch();

  const plusCount = async () => {
    const plusCountData = await fetch('http://localhost:5500/data/pluscounts', {
      method: 'POST',
    });
    if (plusCountData.status === 200) {
      console.log(await plusCount.json());
    } else {
      throw new Error('방문자수 업데이트 실패');
    }
  };

  // useEffect(() => {
  //   plusCount();
  // }, []);
  return (
    <>
      <Header>당신의 MBTI 결과는?</Header>
      <Explanation>{explanation.text}</Explanation>
      <Result>{result}</Result>
      <Addtional>이건 재미로 읽어 보세요!</Addtional>
      <AdditionalImg src={explanation.img}></AdditionalImg>
      <OrangeButton
        text="다시 검사하기"
        clickEvent={() => {
          dispatch(reset());
          plusCount();
        }}
      ></OrangeButton>
    </>
  );
}
