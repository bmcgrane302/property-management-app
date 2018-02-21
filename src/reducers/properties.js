import { GET_PROPERTIES_PENDING, GET_PROPERTIES_SUCCESS,
         ADD_PROPERTY_PENDING, ADD_PROPRETY_SUCCESS,
         REMOVE_PROPERTY_PENDING, REMOVE_PROPERTY_SUCCESS,
         REPAIR_COMPLETE_PENDING, REPAIR_COMPLETE_SUCCESS,
         RENEWAL_REMOVED_PENDING, RENEWAL_REMOVED_SUCCESS,
         RENT_PAID_PENDING, RENT_PAID_SUCCESS,
         EDIT_PROPERTY_PENDING, EDIT_PROPERTY_SUCCESS,
         REPAIR_NEEDED_PENDING, REPAIR_NEEDED_SUCCESS
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
    case REMOVE_PROPERTY_PENDING:
     return state;
    case REMOVE_PROPERTY_SUCCESS:
      return [...action.payload.data];
    case REPAIR_COMPLETE_PENDING:
     return state;
    case REPAIR_COMPLETE_SUCCESS:
     return [...action.payload.data ];
    case RENEWAL_REMOVED_PENDING:
     return state;
    case RENEWAL_REMOVED_SUCCESS:
     return [...action.payload.data];
    case RENT_PAID_PENDING:
     return state;
    case RENT_PAID_SUCCESS:
        let newState = state.filter((item,i)=> state[i].id === action.payload.data[0].id);
        let rent = newState[0].rent_amount;
     return [...action.payload.data];
    case EDIT_PROPERTY_PENDING:
     return state;
    case EDIT_PROPERTY_SUCCESS:
     return [...action.payload.data];
    case REPAIR_NEEDED_PENDING:
     return state;
    case REPAIR_NEEDED_SUCCESS:
     return [...action.payload.data];
    default:
     return state;
  }
}
