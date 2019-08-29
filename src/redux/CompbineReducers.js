import {combineReducers} from 'redux'

const user = (state = {},action) => {
  
  return(
    state
  )
}

const people = (state = [],action) => {
  if(action.type === 'SAVE_PEOPLE' ){
    return(
      action.people
    )
  }
  return(state)
}

const chat = (state = [],action) => {
  if(action.type === 'SET_CHAT'){
    return(
      action.data
    )
  }
  return(state)
}

export default combineReducers({
  user,
  people,
  chat
})