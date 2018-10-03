import { createStore, combineReducers } from 'redux';
import quizeReducer from '../reducers/quize';

const rootReducer = combineReducers({
  quize: quizeReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;