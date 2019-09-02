import {combineReducers} from 'redux'

const user = (state = {},action) => {
  if(action.type === 'SAVE_USER'){
    return(
      action.data
    )
  }
  return state
}

const people = (state = [],action) => {
  if(action.type === 'SAVE_PEOPLE' ){
    return(
      action.data
    )
  }
  return(state)
}

const groups = (state = [],action)=> {
  if(action.type === 'SAVE_GROUPS'){
    return action.data
  }
  return state
}

const chat = (state = {},action) => {
  if(action.type === 'SET_CHAT'){
    return(
      action.data
    )
  }
  return(state)
}

const channels = (state=[],action) => {
  if(action.type === 'SET_CHANNEL_LIST'){
    return(
      action.data
    )
  }
  return(state)
}

export default combineReducers({
  user,
  people,
  groups,
  chat,
  channels
})