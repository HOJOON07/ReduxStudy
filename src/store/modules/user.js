const initState = {
  userID: '',
  userPW: '',
  isLogin: false,
};

// 액션 타입
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/logout';

//액션 생성 함수

export const login = (userInfo) => {
  return {
    type: LOGIN,
    payload: userInfo,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// 리듀서 일해라
const user = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userID: action.payload.id,
        userPW: action.payload.pw,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        userID: '',
        userPW: '',
        isLogin: false,
      };
    default:
      return state;
  }
};

export default user;
