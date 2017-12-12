import axios from 'axios'

export const GET_PROPERTIES_PENDING = 'GET_PROPERTIES_PENDING'
export const GET_PROPERTIES_SUCCESS = 'GET_PROPERTIES_SUCCESS'
export const ADD_PROPERTY_PENDING = 'ADD_PROPERTY_PENDING'
export const ADD_PROPRETY_SUCCESS = 'ADD_PROPRETY_SUCCESS'
export const REMOVE_PROPERTY_PENDING = 'REMOVE_PROPERTY_PENDING'
export const REMOVE_PROPERTY_SUCCESS = 'REMOVE_PROPERTY_SUCCESS'
export const EDIT_PROPERTY_PENDING = 'EDIT_PROPERTY_PENDING'
export const EDIT_PROPERTY_SUCCESS = 'EDIT_PROPERTY_SUCCESS'
export const REPAIR_COMPLETE_PENDING = 'REPAIR_COMPLETE_PENDING'
export const REPAIR_COMPLETE_SUCCESS = 'REPAIR_COMPLETE_SUCCESS'
export const RENEWAL_REMOVED_PENDING = 'RENEWAL_REMOVED_PENDING'
export const RENEWAL_REMOVED_SUCCESS = 'RENEWAL_REMOVED_SUCCESS'

export const getProperties = () => {
  return async (dispatch) => {
    dispatch({type: GET_PROPERTIES_PENDING})
    let properties = await axios.get(`http://localhost:8000`)
    dispatch({
      type: GET_PROPERTIES_SUCCESS,
      payload: properties
    })
  }
}

export const addProperty = (newProp) => {
  return async (dispatch) => {
    dispatch({type: ADD_PROPERTY_PENDING})
    let properties = await axios.post(`http://localhost:8000`, newProp)
    dispatch({
      type: ADD_PROPRETY_SUCCESS,
      payload: properties
    })
  }
}

export const removeProperty = (id) => {
  return async (dispatch) => {
    dispatch({type: REMOVE_PROPERTY_PENDING})
    let properties = await axios.delete(`http://localhost:8000/${id}`)
    dispatch({
      type: REMOVE_PROPERTY_SUCCESS,
      payload: properties
    })
  }
}

export const editProperty = (id) => {
  return async (dispatch) => {
    dispatch({type: EDIT_PROPERTY_PENDING})
    let properties = await axios.patch(`http://localhost:8000/${id}/update`)
    dispatch({
      type: EDIT_PROPERTY_SUCCESS,
      payload: properties
    })
  }
}

export const repairComplete = (id) => {
  return async (dispatch) => {
    dispatch({type: REPAIR_COMPLETE_PENDING})
    let properties = await axios.patch(`http://localhost:8000/removerepair/${id}`)
    dispatch({
      type: REPAIR_COMPLETE_SUCCESS,
      payload: properties
    })
  }
}

export const renewalRemoved = (id) => {
  return async (dispatch) => {
    dispatch({type: RENEWAL_REMOVED_PENDING})
    let properties = await axios.patch(`http://localhost:8000/removerenewal/${id}`)
    dispatch({
      type: RENEWAL_REMOVED_SUCCESS,
      payload: properties
    })
  }
}
