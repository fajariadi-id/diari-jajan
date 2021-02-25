import receiptReducer from './receiptReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  receipt: receiptReducer,
});

export default rootReducers;
