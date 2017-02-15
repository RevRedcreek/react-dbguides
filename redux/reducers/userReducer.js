
function getId(state){
    return state.ADVENTUREs.reduce((maxId, ADVENTURE) => {
      return Math.max(ADVENTURE.id, maxId)
    }, -1) + 1
}

let userReducer = function(user={}, action){
  switch(action.type){
      case 'CREATE_USER_ID':
      return {
          username: user.username,
          id: action.id
        }
      case 'CREATE_USER':
        return action.user

      case 'LOGIN_REQUEST':
        return {
            username: user.username,
            id: action.id
          }

    default:
      return user;
  }
}

export default userReducer
