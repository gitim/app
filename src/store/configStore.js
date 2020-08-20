import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk))

  return store
}
