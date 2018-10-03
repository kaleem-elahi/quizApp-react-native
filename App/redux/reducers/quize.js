import { UPDATE_MARKS } from '../constants/quize'

const initialState = {
  marks: 0,
  rating: ''
};

const quizeReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MARKS:
      return {
        ...state,
        marks: action.payload
      };
    default:
      return state;
  }
}

export default quizeReducer