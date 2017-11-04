function getId(guides){
    return guides.reduce((maxId, GUIDE) => {
      return Math.max(guide.id, maxId)
    }, -1) + 1
}

import {
  EXPAND_GUIDE, COLLAPSE_GUIDE, ADD_GUIDE,  GUIDE_REQUEST, GUIDE_SUCCESS, GUIDE_FAILURE,
  CREATE_GUIDE, DELETE_GUIDE
} from '../actions'

let guidesReducer = function(guides={}, action){
  console.log("initial state", guides)
  switch(action.type){
    case EXPAND_GUIDE:
      var newObject = Object.assign({}, ...guides, {list:[]})
      guides.list.map((guide) => {
          if(guide.id == action.id) {
            newObject["list"].push(Object.assign({}, guide, {expanded:true}))
          }else{
            newObject["list"].push(guide)
          }
        })
        console.log("new state", newObject)
        return newObject

    case COLLAPSE_GUIDE:
      var newObject = Object.assign({}, ...guides, {list:[]})
      guides.list.map((guide) => {
          if(guide.id == action.id) {
            newObject["list"].push(Object.assign({}, guide, {expanded:false}))
          }else{
            newObject["list"].push(guide)
          }
        })
        return newObject

    case ADD_GUIDE:
      return [{
          //add new guides
          text: action.text,
          completed: false,
          id: getId(guides)
        }, ...guides]

    case DELETE_GUIDE:
      return guides.filter((guide) => {
          return guide.id !== action.id
        })
    default:
      return guides;
  }
}

export default guidesReducer
