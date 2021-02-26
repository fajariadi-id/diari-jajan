import receiptReducer from './receiptReducer';
import modalReducer from './modalReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  receipt: receiptReducer,
  modal: modalReducer,
});

export default rootReducers;
