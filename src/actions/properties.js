import axios from 'axios'

export const GET_PROPERTIES_PENDING = 'GET_PROPERTIES_PENDING'
export const GET_PROPERTIES_SUCCESSS = 'GET_PROPERTIES_SUCCESSS'


export const getProperties = () => {
  return async (dispatch) => {
    dispatch({type: GET_PROPERTIES_PENDING})
    let properties = await axios.get(`http://localhost:8000`)
    dispatch({
      type: GET_PROPERTIES_SUCCESSS,
      payload: properties
    })
  }
}
