const weightState = 100;
const today = new Date().getDate();

const weigth = (state = weightState, action) => {
  switch (action.type) {
    case '증가':
      state++;
      break;
    case '감소':
      state--;
      break;
    case '살빼기':
      state -= today;
      break;
    case '살찌기':
      state += today;
      break;
  }

  return state;
};

export default weigth;
