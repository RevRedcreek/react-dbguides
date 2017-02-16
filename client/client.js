import React from 'react'
import {render} from 'react-dom'

import App from '../components/App'
import Home from '../components/Home'
import GuideInfo from '../components/GuideInfo'
import GuideList from '../components/GuideList'
import AdventureList from '../components/AdventureList'
import AdventureInfo from '../components/AdventureInfo'

import configureStore from '../redux/store'
import  {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

//configure and create store here

let initialState = {
  auth:{
    isFetching: false,
    isAuthenticated: false,
    user: {
      email: 'redcreek@yahoo.com',
      password: '',
      id: 21
    }
  },
  guides: {
    isFetching: false,
    list: [
      {
        username: 'Elissa',
        email: 'email',
        id: 1,
        avatar: '/assets/images/guides/header-1.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '

      },
      {
        username: 'Chris',
        email: 'email',
        id: 2,
        avatar: '/assets/images/guides/header-2.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '

      }
    ]
  },
  adventures : {
    isFetching: false,
    list: [
      {
        location: 'gunnison',
        startTime: '',
        endTime: '',
        activity: '',
        description:'blah',
        id: 1
     },
     {
       location: 'crested butte',
       startTime: '',
       endTime: '',
       activity: '',
       description:'blah',
       id: 2
    }
  ]
  }
}

let store = configureStore(initialState)
console.log( store )
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/guides" component={GuideList}>
            <Route path="/guides/:id" component={GuideInfo}/>
          </Route>
          <Route path="/adventures" component={AdventureList}>
            <Route path="/adventures/:id" component={AdventureInfo}/>
          </Route>
        </Route>
      </Router>
    </div>
  </Provider>,
document.getElementById('app')

)
