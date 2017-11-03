function getId(guides){
    return guides.reduce((maxId, GUIDE) => {
      return Math.max(guide.id, maxId)
    }, -1) + 1
}

let guidesReducer = function(guides={}, action){
  console.log("initial state", guides)
  switch(action.type){
    case 'ADD_GUIDE':
      return [{
          //add new guides
          text: action.text,
          completed: false,
          id: getId(guides)
        }, ...guides]

    case 'COLLAPSE_GUIDE':
      var newObject = Object.assign({}, ...guides, {list:[]})
      guides.list.map((guide) => {
          if(guide.id == action.id) {
            newObject["list"].push(Object.assign({}, guide, {expanded:false}))
          }else{
            newObject["list"].push(guide)
          }
        })
        console.log("new state", newObject)
        return newObject

    case 'EXPAND_GUIDE':
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

    case 'DELETE_GUIDE':
      return guides.filter((guide) => {
          return guide.id !== action.id
        })
    default:
      return guides;
  }
}

export default guidesReducer
