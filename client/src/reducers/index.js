import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import reduxThunk from "redux-thunk";

import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
});
