import { combineReducers } from 'redux'
import counter from './counter'
import userInfo from './userReducer'
export default combineReducers({
	counter,
	userInfo
})