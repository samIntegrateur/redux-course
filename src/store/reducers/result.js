import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

// external function if we want to have leaner reducer
const deleteResult = (state, action) => {
  // it is immutable as we make a delete,
  // if we updated a value, we would have to deep copy the result object as well
  // https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8303068#overview
  // const id = 2;
  // const newArray = [...state.results];
  // newArray.splice(id, 1);
  const updatedArray = state.results.filter((result) => result.id !== action.id);
  return updateObject(state, {results: updatedArray});
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(
        state,
        // nb: counter match another reducer / store part: counter, it is passed in Counter.js
        {results: state.results.concat({id: new Date(), value: action.counter})}
      );
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }

};

export default resultReducer;
