export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

import fetch from 'isomorphic-fetch'
import { CALL_API } from '../middleware/api'
import Auth0Lock from 'auth0-lock'
// import {AUTH0_CLIENT_ID, AUTH0_CLIENT_DOMAIN} from '../.env'
export const EXPAND_GUIDE = 'EXPAND_GUIDE'
export const COLLAPSE_GUIDE = 'COLLAPSE_GUIDE'
export const GUIDE_REQUEST = 'GUIDE_REQUEST'
export const GUIDE_SUCCESS = 'GUIDE_SUCCESS'
export const GUIDE_FAILURE = 'GUIDE_FAILURE'
export const ADD_GUIDE = 'ADD_GUIDE'
export const CREATE_GUIDE = 'CREATE_GUIDE'
export const DELETE_GUIDE = 'DELETE_GUIDE'

export const EXPAND_ADVENTURE = 'EXPAND_ADVENTURE'
export const COLLAPSE_ADVENTURE = 'COLLAPSE_ADVENTURE'

export const ADVENTURE_REQUEST = 'ADVENTURE_REQUEST'
export const ADVENTURE_RECEIVE = 'ADVENTURE_RECEIVE'

export const ADVENTURE_SUCCESS = 'ADVENTURE_SUCCESS'
export const ADVENTURE_FAILURE = 'ADVENTURE_FAILURE'
export const ADD_ADVENTURE = 'ADD_ADVENTURE'
export const CREATE_ADVENTURE = 'CREATE_ADVENTURE'
export const COMPLETE_ADVENTURE = 'COMPLETE_ADVENTURE'
export const DELETE_ADVENTURE = 'DELETE_ADVENTURE'

let actions = {
  expandGuide: function (id) {
    return {
      type: EXPAND_GUIDE,
      id : id
    }
  },
  collapseGuide: function (id) {
    return {
      type: COLLAPSE_GUIDE,
      id : id
    }
  },
  expandAdventure: function(id){
    return {
      type: EXPAND_ADVENTURE,
      id : id
    }
  },
  collapseAdventure: function (id) {
    return {
      type: COLLAPSE_ADVENTURE,
      id : id
    }
  },
  addAdventure: function (payload){
    return {
      type: ADD_ADVENTURE,
      payload : payload
    }
  },
  completeAdventure: function(id){
    return {
      type: COMPLETE_ADVENTURE,
      id: id
    }
  },
  deleteAdventure: function(id){
    return {
      type: DELETE_ADVENTURE,
      id: id
    }
  },
  requestAdventures: function (page){
    return {
      type: ADVENTURE_REQUEST,
      page : page
    }
  },
  recieveAdventures: function(page, json){
    console.log("JSON RESPONSE: ", json)

    return {
      type: ADVENTURE_RECEIVE,
      adventures: {list: json.data},
    }
  },
  // Uses the API middlware to get a quote
  fetchAdventure: function(page) {
    return dispatch => {
      console.log("dispatch", dispatch)
      dispatch(requestAdventures(page))
      return fetch(`http://localhost:3000/adventures`)
        .then(
          response => response.json(),
          error => console.log('An error occured.', error)
        )
        .then(json =>
          dispatch(recieveAdventures(page, json))
        )
    }
  },
  login: function() {
    // display lock widget
    return dispatch => {
      lock.show();
    }
  }

}

export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}


// Same API middlware is used to get a
// secret quote, but we set authenticated
// to true so that the auth header is sent
export function fetchSecretQuote() {
  return {
    [CALL_API]: {
      endpoint: 'protected/random-quote',
      authenticated: true,
      types: [QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE]
    }
  }
}

export const SHOW_LOCK = 'SHOW_LOCK'
export const LOCK_SUCCESS = 'LOCK_SUCCESS'
export const LOCK_ERROR = 'LOCK_ERROR'

function showLock() {
  return {
    type: SHOW_LOCK
  }
}

function lockSuccess(profile, token) {
  return {
    type: LOCK_SUCCESS,
    profile,
    token
  }
}

function lockError(err) {
  return {
    type: LOCK_ERROR,
    err
  }
}

//const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_CLIENT_DOMAIN);
const lock = new Auth0Lock('Y1tS8PfY8PyrTdMx4wKwYkcommuD7l6z', 'redcreek.auth0.com');


// export function login() {
//   // display lock widget
//   return dispatch => {
//     lock.show();
//   }
// }

// Listen to authenticated event and get the profile of the user
export function doAuthentication() {
    return dispatch => {
      lock.on("authenticated", function(authResult) {
            lock.getProfile(authResult.idToken, function(error, profile) {

              if (error) {
                // handle error
                return dispatch(lockError(error))
              }

              localStorage.setItem('profile', JSON.stringify(profile))
              localStorage.setItem('id_token', authResult.idToken)
              return dispatch(lockSuccess(profile))
            });
      });
    }
}

export default actions
