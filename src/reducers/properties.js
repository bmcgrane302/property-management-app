import { GET_PROPERTIES_PENDING, GET_PROPERTIES_SUCCESSS
       } from '../actions/properties'


export default(state=[], action) => {
  switch (action.type) {
    case GET_PROPERTIES_PENDING:
     return state;
    case GET_PROPERTIES_SUCCESSS:
     return [...action.payload.data];
    default:
     return state;
  }
}
