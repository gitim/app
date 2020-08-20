import { API, ENTITIES } from './constants'

export function createEntityLoadingSelector(entity) {
  return function(state) {
    return state[API][entity]?.loading
  }
}

export function createEntityAllSelector(entity) {
  return function(state) {
    return state[ENTITIES][entity]
  }
}
