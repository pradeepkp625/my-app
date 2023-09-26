import { combineReducers } from 'redux';
import { productReducer } from './reducers.redux';

export const reducers = combineReducers({
  allProducts: productReducer,
});
