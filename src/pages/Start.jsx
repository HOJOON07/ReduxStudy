import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { next } from '../store/modules/mbti';
import { init } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;

const MainImg = styled.img`
  width: inherit;
`;

const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Start() {
  const [counts, setCounts] = useState(0);

  const dispatch = useDispatch();
  const plusCount = async () => {
    console.log('!!!!');
    const plusCountData = await fetch('http://localhost:5500/data/pluscounts', {
      method: 'POST',
    });
    if (plusCountData.status === 200) {
      console.log(await plusCount.json());
    } else {
      throw new Error('방문자 수 업데이트 완료');
    }
  };

  const fetchData = async () => {
    const resMbtiData = await fetch('http://localhost:5500/data/getdata');
    if (resMbtiData.status === 200) {
      const mbtiData = await resMbtiData.json();
      if (mbtiData[0]) dispatch(init(mbtiData[0]));
    } else {
      console.log(await resMbtiData.json());
    }
    //방문자 수 받아오는 코드
    const getCount = await fetch('http://localhost:5500/data/getcounts');
    if (getCount.status === 200) {
      const countData = await getCount.json();
      console.log(countData);
      // plusCount();
      setCounts(countData.counts);
    }
  };

  useEffect(() => {
    fetchData();
    plusCount();
  }, []);

  return (
    <>
      <Header>개발자 MBTI조사</Header>
      <MainImg src="/images/main.jpg" alt="메인"></MainImg>
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!{`\n\n`}
        {counts} 명이 방문했습니다.
      </SubHeader>
      <OrangeButton
        text="테스트 시작"
        clickEvent={() => dispatch(next())}
      ></OrangeButton>
    </>
  );
}
