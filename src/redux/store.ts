import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)))

