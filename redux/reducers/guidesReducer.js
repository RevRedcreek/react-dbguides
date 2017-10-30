function getId(guides){
    return guides.reduce((maxId, GUIDE) => {
      return Math.max(guide.id, maxId)
    }, -1) + 1
}

let guidesReducer = function(guides=[], action){
  switch(action.type){
    case 'ADD_GUIDE':
      return [{
          //add new guides
          text: action.text,
          completed: false,
          id: getId(guides)
        }, ...guides]
    case 'EXPAND_GUIDE':
      return guides.map((guide) => {
          return guide.id === action.id ?
          Object.assign({}, guide, {expanded: !guide.expanded}) : guide
        })
    case 'DELETE_GUIDE':
      return guides.filter((guide) => {
          return guide.id !== action.id
        })
    default:
      return guides;
  }
}

export default guidesReducer
