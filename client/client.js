import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import  {Provider} from 'react-redux'
//configure and create store here
let initialState = {
  todos : [{
    id: 0,
    completed: false,
    text: 'make todos'
  }],
  user: {
    username: 'Chris',
    id: 21
  }
}

let store = configureStore(initialState)

render(
<Provider store= {store}>
  <App/>
</Provider>,
document.getElementById('app')

)
