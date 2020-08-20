import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from '../constants'

export default function api(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        [action.payload.entity]: {
          loading: true,
        },
      }

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        [action.payload.entity]: {
          loading: false,
        },
      }

      case FETCH_DATA_FAIL:
        return {
          ...state,
          [action.payload.entity]: {
            loading: false,
            error: action.error,
          },
        }

      default:
        return state
  }
}
