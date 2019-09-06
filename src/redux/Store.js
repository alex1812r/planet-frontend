import { createStore } from 'redux'

import CombineReducers from './CompbineReducers'

export default createStore(CombineReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())