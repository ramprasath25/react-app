import {combineReducers} from 'redux';
import users from './userReducer';
import auth from './authReducer';
export default combineReducers ({
	 users,
	 auth
 })