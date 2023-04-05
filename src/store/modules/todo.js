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
  buyList: ['닌텐도', '자동차'],
  todoListCount: 3,
};

const doneFunc = (action) => {
  const result = [...initState.toDoList];
  const doneList = result.filter((item) => item.id === action.id);
};

// let counts = initState.toDoList.length;
// initState['nextID'] = counts;

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
        // todoList: [
        //   ...state.toDoList,
        //   {
        //     id: action.payload.id,
        //     text: action.payload.text,
        //     done: false,
        //   },
        // ],
        // nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        toDoList: state.toDoList.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
};

export default todo;
