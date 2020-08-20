import React from 'react'
import { Provider } from 'react-redux'

import Header from 'components/Header'
import Main from 'components/Main'
import { configStore } from 'store'

const store = configStore()

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Main />
      </div>
    </Provider>
  )
}

export default App
