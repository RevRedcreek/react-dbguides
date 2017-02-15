import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
} from '../actions'

export default function auth(auth = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, auth, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, auth, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, auth, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, auth, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return auth
  }
}
