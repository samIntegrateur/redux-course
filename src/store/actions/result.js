import * as actionTypes from './actionTypes';

// action creators
// useful for async code https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8226896#overview
export const saveResult = (counter) => {
  return {
    type: actionTypes.STORE_RESULT,
    counter: counter
  };
};

export const storeResult = (counter) => {
  // create async code with the help of redux-thunk middleware
  // getState is additional arg from redux-thunk, but it should by avoided as actions are not made for logic
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().counterState.counter;
      // console.log('oldCounter', oldCounter);
      dispatch(saveResult(counter))
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id
  };
};
