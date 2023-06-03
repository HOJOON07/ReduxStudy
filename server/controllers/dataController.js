const mongoㅌClient = require('./mongoConnect');

const initState = {
  mbtiResult: '',
  page: 0, // 0: 인트로 페이지, 1 ~ n: 선택 페이지, n+1: 결과 페이지
  survey: [
    {
      question:
        '퇴근 직전에 동료로부터 개발자 모임에 초대를 받은 나!\n\n퇴근 시간에 나는?',
      answer: [
        {
          text: '그런 모입을 왜 이제서야 알려 준거야! 당장 모임으로 출발한다',
          result: 'E',
        },
        {
          text: '1년 전에 알려줬어도 안갔을 건데 뭔... 더 빠르게 집으로 간다',
          result: 'I',
        },
      ],
    },
    {
      question:
        '새로운 서비스 개발 중에, 동료가 새로 나온 신기술을 쓰는게 더 편할거라고 추천을 해준다!\n\n나의 선택은!?',
      answer: [
        {
          text: '뭔소리여, 그냥 하던 대로 개발하면 되는거지! 기존 생각대로 개발한다',
          result: 'S',
        },
        {
          text: '오호? 그런게 있어? 일단 구글을 찾아본다',
          result: 'N',
        },
      ],
    },
    {
      question:
        '서비스 출시 이틀 전 야근 시간, 갑자기 동료가 어!? 를 외쳤다!\n\n나의 선택은?',
      answer: [
        {
          text: '무슨 버그가 발생한 거지? 아마 DB 관련 버그가 아닐까? 빠르게 동료의 자리로 달려간다',
          result: 'T',
        },
        {
          text: '아... 내일도 야근 각이구나 ㅠㅠ! 일단 동료의 자리로 가 본다',
          result: 'F',
        },
      ],
    },
    {
      question:
        '팀장님이 xx씨 그전에 말한 기능 내일 오후까지 완료 부탁해요라고 말했다!\n\n나의 선택은?',
      answer: [
        {
          text: '일단 빠르게 개발 완료하고, 나머지 시간에 논다',
          result: 'J',
        },
        {
          text: '그거 내일 아침에 와서 개발해도 충분 하겠는데? 일단 논다',
          result: 'P',
        },
      ],
    },
  ],
  explanation: {
    ESTJ: {
      text: '무리한 개발 일정만 아니라면 일정을 철저하게 지킬 당신의 MBTI 는!',
      img: '/images/estj.jpg',
    },
    ISTJ: {
      text: '스스로 하고싶은 분야를 끝까지 파고 들어서 끝내 성공 시킬 당신의 MBTI 는!',
      img: '/images/istj.jpg',
    },
    ENTJ: {
      text: '미래의 능력 쩌는 개발 팀장님으로 개발팀을 이끌 당신의 MBTI 는!',
      img: '/images/entj.jpg',
    },
    INTJ: {
      text: '혼자서 모든 것을 다 해내는 원맨 캐리의 표본! 당신의 MBTI 는!',
      img: '/images/intj.jpg',
    },
    ESFJ: {
      text: '개발팀의 분위기 메이커이자 아이디어 뱅크가 될 당신의 MBTI 는!',
      img: '/images/esfj.jpg',
    },
    ISFJ: {
      text: '개발팀의 마더 테레사, 고민 상담소 역할을 자처하는 당신의 MBTI 는!',
      img: '/images/isfj.jpg',
    },
    ENFJ: {
      text: '당신이 있는 팀은 언제나 올바른 곳을 향하고 있습니다! 팀원은 물론 팀의 방향을 챙기는 당신의 MBTI 는!',
      img: '/images/enfj.jpg',
    },
    INFJ: {
      text: '예리한 통찰력으로 모든 것을 내다보면서 완벽하게 개발을 할 당신의 MBTI 는!',
      img: '/images/infj.jpg',
    },
    ESTP: {
      text: '쿨하게 자신이 할 것을 하면서 논리적인 개발을 할 당신의 MBTI 는!',
      img: '/images/estp.jpg',
    },
    ISTP: {
      text: '단시간에도 효율적으로 개발하여 모든 것을 완성할 당신의 MBTI 는!',
      img: '/images/istp.jpg',
    },
    ENTP: {
      text: '스스로 흥미만 생긴다면 당장에 페이스북도 만들어 버릴 당신의 MBTI 는!',
      img: '/images/entp.jpg',
    },
    INTP: {
      text: '확실한 주관과 뛰어난 지능을 바탕으로 논리적 개발을 할 당신의 MBTI 는!',
      img: '/images/intp.jpg',
    },
    ESFP: {
      text: '개발팀의 에너자이저! 개발팀 특유의 서먹함을 깨는 당신! 당신의 MBTI 는!',
      img: '/images/esfp.jpg',
    },
    ISFP: {
      text: '뛰어난 호기심과 예술적 감각으로 개발팀의 부족함을 채워갈 당신! 당신의 MBTI 는!',
      img: '/images/isfp.jpg',
    },
    ENFP: {
      text: '자유로운 영혼으로 개발팀의 윤활유 및 활력소가 되어줄 당신의 MBTI 는!',
      img: '/images/enfp.jpg',
    },
    INFP: {
      text: '개발팀의 그 어떤 트러블도 당신 앞에서는 사르르 녹을뿐, 팀의 근간을 다져주는 당신의 MBTI 는!',
      img: '/images/infp.jpg',
    },
  },
};

const setData = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const data = client.db('MBTI').collection('data'); //있으면 만들고 없으면 찾아와라.

    await data.insertOne(initState);
    res.status(200).json('데이터 추가 성공!');
  } catch (err) {
    console.log(err); //이건 백엔드 개발자가 보는 콘솔
    res.status(500).json('데이터 생성 실패, 문제 발생 해결하셈 '); //프론트엔드 한테 보내주는 메세지
  }
};
//REDUX 데이터를 가지고 오는 컨트롤러
const getData = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const data = client.db('MBTI').collection('data');

    const mbtiData = await data.find({}).toArray();
    res.status(200).json(mbtiData);
  } catch (err) {
    console.log(err);
    res.status(500).json('데이터 가져오기 실패');
  }
};

const getCounts = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const countDB = client.db('MBTI').collection('counts');

    const counts = await countDB.findOne({ id: 1 });
    res.status(200).json(counts);
  } catch (err) {
    res.status(500).json('방문자 정보 가져오기 에러');
    console.log(err);
  }
};

const plusCounts = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const countDB = client.db('MBTI').collection('counts');

    await countDB.updateOne({ id: 1 }, { $inc: { counts: +1 } });
    res.status(200).json('방문자 수 업데이트 성공');
  } catch (err) {
    console.log(err);
    res.status(500).json('방문자 수 없데이트 실패');
  }
};
//객체에 담아서 컨트롤러 함수를 보내준다.
module.exports = {
  setData,
  getData,
  getCounts,
  plusCounts,
};
