import { combineReducers } from 'redux'
import { store } from '../store'
import bankReducers from './bankReduser'

const reducers = combineReducers({
    bank : bankReducers
})

export default reducers

export type State = ReturnType<typeof reducers>
export type StateDispatch = typeof store.dispatch