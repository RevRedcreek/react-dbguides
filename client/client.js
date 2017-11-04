import React from 'react'
import {render} from 'react-dom'

import App from '../components/App'
import Home from '../components/Home'
import Login from '../components/Login'
import RegisterUser from '../components/RegisterUser'
import CreateAdventure from '../components/CreateAdventure'
import GuideList from '../components/GuideList'
import GuideInfo from '../components/GuideInfo'
import GuideInfoExpanded from '../components/GuideInfoExpanded'
import AdventureList from '../components/AdventureList'
import AdventureInfo from '../components/AdventureInfo'
import AdventureInfoExpanded from '../components/AdventureInfoExpanded'

import configureStore from '../redux/store'

import  {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
//configure and create store here

let initialState = {
  auth:{
    isFetching: false,
    isAuthenticated: true,
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
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        expanded: true
      },
      {
        username: 'Chris',
        email: 'email',
        id: 2,
        avatar: '/assets/images/guides/header-2.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        expanded: false
      },
      {
        username: 'Elissa',
        email: 'email',
        id: 3,
        avatar: '/assets/images/guides/header-1.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        expanded: false
      },
      {
        username: 'Chris',
        email: 'email',
        id: 4,
        avatar: '/assets/images/guides/header-2.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        expanded: false
      },
      {
        username: 'Elissa',
        email: 'email',
        id: 5,
        avatar: '/assets/images/guides/header-1.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        expanded: false
      },
      {
        username: 'Chris',
        email: 'email',
        id: 6,
        avatar: '/assets/images/guides/header-2.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        expanded: false
      }
    ]
  },
  adventures : {
    isFetching: false,
    list: [
      {
        activity: 'Rock Climbing',
        location: 'gunnison',
        date: '2017-08-01',
        duration: '2017-08-01',
        description:'Rock climb',
        id: 1,
        expanded: false
     },
     {
       activity: 'Rock Climbing',
       location: 'lake city',
       date: '2017-08-01',
       duration: '2017-08-01',
       activity: 'Ice Climbing',
       description:'Ice climb',
       id: 2,
       expanded: false
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
          <Route name="Login" path="/login" component={Login}/>
          <Route name="Register" path="/register" component={RegisterUser}/>
          <Route name="GuideList" path="/guides" component={GuideList}/>
          <Route name="GuideInfoExpanded" path="/guides/:id" component={GuideInfoExpanded}/>
          <Route name="AdventureList" path="/adventures" component={AdventureList}/>
          <Route name="CreateAdventure" path="/adventures/create" component={CreateAdventure}/>
          <Route name="AdventureInfoExpanded" path="/adventures/:id" component={AdventureInfoExpanded}/>
        </Route>
      </Router>
    </div>
  </Provider>,
document.getElementById('app')
)
