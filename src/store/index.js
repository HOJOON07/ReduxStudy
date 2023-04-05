import { combineReducers } from 'redux';
import todo from './modules/todo';
import weigth from './modules/weight';
import mbti from './modules/mbti';

export default combineReducers({
  todo,
  mbti,
  weigth,
});
