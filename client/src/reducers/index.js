import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer


});
