import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from './constants'

import api from 'api'

export function fetchData({ entity, query }) {
  return async (dispatch) => {
    dispatch({
      type: FETCH_DATA_PENDING,
      payload: {
        entity,
        query,
      }
    })

    try {
      const response = await api(entity, query)

      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: {
          entity,
          data: response.data,
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: { entity },
        error,
      })
    }
  }
}
