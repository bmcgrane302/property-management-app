import axios from 'axios'

export const GET_PROPERTIES_PENDING = 'GET_PROPERTIES_PENDING'
export const GET_PROPERTIES_SUCCESS = 'GET_PROPERTIES_SUCCESS'
export const ADD_PROPERTY_PENDING = 'ADD_PROPERTY_PENDING'
export const ADD_PROPRETY_SUCCESS = 'ADD_PROPRETY_SUCCESS'


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

export const addProperty = () => {
  return async (dispatch) => {
    dispatch({type: ADD_PROPERTY_PENDING})
    let properties = await axios.post(`http://localhost:8000`)
    dispatch({
      type: ADD_PROPRETY_SUCCESS,
      payload: properties
    })
  }
}
