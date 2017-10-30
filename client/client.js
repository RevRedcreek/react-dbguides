import React from 'react'
import {render} from 'react-dom'

import App from '../components/App'
import Home from '../components/Home'
import GuideList from '../components/GuideList'
import GuideInfo from '../components/GuideInfo'
import GuideInfoExpanded from '../components/GuideInfoExpanded'
import AdventureList from '../components/AdventureList'
import AdventureInfo from '../components/AdventureInfo'
import AdventureInfoExpanded from '../components/AdventureInfoExpanded'

import configureStore from '../redux/store'
import {initialState} from '../redux/initialState'
import  {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
//configure and create store here

let store = configureStore(initialState)
console.log( store )
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route name="GuideList" path="/guides" component={GuideList}/>
          <Route name="GuideInfoExpanded" path="/guides/:id" component={GuideInfoExpanded}/>
          <Route name="AdventureList" path="/adventures" component={AdventureList}/>
          <Route name="AdventureInfoExpanded" path="/adventures/:id" component={AdventureInfoExpanded}/>
        </Route>
      </Router>
    </div>
  </Provider>,
document.getElementById('app')
)
