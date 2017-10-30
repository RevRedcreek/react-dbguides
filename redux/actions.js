export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

import { CALL_API } from '../middleware/api'
import Auth0Lock from 'auth0-lock'
// import {AUTH0_CLIENT_ID, AUTH0_CLIENT_DOMAIN} from '../.env'
export const ADVENTURE_REQUEST = 'ADVENTURE_REQUEST'
export const ADVENTURE_SUCCESS = 'ADVENTURE_SUCCESS'
export const ADVENTURE_FAILURE = 'ADVENTURE_FAILURE'
export const ADD_ADVENTURE = 'ADD_ADVENTURE'
export const CREATE_ADVENTURE = 'CREATE_ADVENTURE'
export const COMPLETE_ADVENTURE = 'COMPLETE_ADVENTURE'
export const DELETE_ADVENTURE = 'DELETE_ADVENTURE'

let actions = {
  expandGUIDE: function (id) {
    return {
      type: EXPAND_GUIDE,
      id : id
    }
  },
  addADVENTURE: function (text){
    return {
      type: ADD_ADVENTURE,
      text : text
    }
  },
  completeADVENTURE: function(id){
    return {
      type: COMPLETE_ADVENTURE,
      id: id
    }
  },
  deleteADVENTURE: function(id){
    return {
      type: DELETE_ADVENTURE,
      id: id
    }
  },
  // Uses the API middlware to get a quote
  fetchAdventure: function() {
    return {
      [CALL_API]: {
        endpoint: 'random-quote',
        types: [ADVENTURE_REQUEST, ADVENTURE_SUCCESS, ADVENTURE_FAILURE]
      }
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
