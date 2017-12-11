import { GET_PROPERTIES_PENDING, GET_PROPERTIES_SUCCESS,
         ADD_PROPERTY_PENDING, ADD_PROPRETY_SUCCESS
       } from '../actions/properties'


export default(state=[], action) => {
  switch (action.type) {
    case GET_PROPERTIES_PENDING:
     return state;
    case GET_PROPERTIES_SUCCESS:
     return [...action.payload.data];
    case ADD_PROPERTY_PENDING:
     return state;
    case ADD_PROPRETY_SUCCESS:
     return [...action.payload.data];
    default:
     return state;
  }
}
