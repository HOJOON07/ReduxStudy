//초기 상태 값.
const initState = {
  toDoList: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추 펴기',
      done: false,
    },
    {
      id: 2,
      text: '프로젝트 잘 마무리 하기',
      done: false,
    },
  ],
};

const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

export function create(payload) {
  return {
    type: CREATE,
    payload,
    //payload:payload와 같은 의미
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

const todo = (state = initState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        toDoList: state.toDoList.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return console.log('done');
    default:
      return state;
  }
};

export default todo;
