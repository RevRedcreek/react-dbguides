import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//add middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let finalCreateStore = composeEnhancers (
  applyMiddleware(thunk, logger())
)(createStore)

export default function configureStore(initialState = {}){
  console.log("state created")
  console.log(initialState)
  return finalCreateStore(rootReducer, initialState)
}

export const initialState = {
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
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

      },
      {
        username: 'Chris',
        email: 'email',
        id: 2,
        avatar: '/assets/images/guides/header-2.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

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
