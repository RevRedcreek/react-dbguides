function getId(state){
    return state.todos.reduce((maxId, todo) => {
      return Math.max(todo.id, maxId)
    }, -1) + 1
}

let userReducer = function(user={}, action){
  switch(action.type){
      case 'CREATE_USER_ID':
      return {
          username: user.username,
          id: action.id
        }
    default:
      return user;
  }
}

export default userReducer
