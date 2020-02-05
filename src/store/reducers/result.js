import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // nb: counter match another reducer / store part: counter, it is passed in Counter.js
        results: state.results.concat({id: new Date(), value: action.counter})
      };
    case actionTypes.DELETE_RESULT:
      // it is immutable as we make a delete,
      // if we updated a value, we would have to deep copy the result object as well
      // https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8303068#overview
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter((result) => result.id !== action.id);
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }

};

export default resultReducer;
