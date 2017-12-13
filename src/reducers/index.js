import properties from './properties';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  properties,
  form: formReducer
});

export default rootReducer;
