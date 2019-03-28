import {combineReducers} from 'redux'
import userInfo from './userInfo'
import tag from './tag'

const rootReducer = combineReducers({userInfo,tag})

export default rootReducer
