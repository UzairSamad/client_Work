import {combineReducers} from 'redux';
import shopReducer from './Shopping/Shopping-reducers';
const rootReducer = combineReducers({shop: shopReducer});
export default rootReducer;
