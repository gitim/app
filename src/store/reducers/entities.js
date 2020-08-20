import { FETCH_DATA_SUCCESS } from '../constants'

export default function entities(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        [action.payload.entity]: action.payload.data,
      }

      default:
        return state
  }
}
