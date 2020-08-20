import { combineReducers } from 'redux'

import { API, ENTITIES } from '../constants'
import apiReducer from './api'
import entitiesReducer from './entities'

export default combineReducers({
  [API]: apiReducer,
  [ENTITIES]: entitiesReducer,
})
