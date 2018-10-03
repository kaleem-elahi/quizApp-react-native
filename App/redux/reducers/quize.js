import { UPDATE_MARKS, RESET_MARKS } from '../constants/quize'

const initialState = {
  marks: 0,
  rating: ''
};

const quizeReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MARKS:
      return {
        ...state,
        marks: action.payload,
        rating: action.rating
      };
    case RESET_MARKS:
      return {
        marks: 0,
        rating: ''
      };
    default:
      return state;
  }
}

export default quizeReducer