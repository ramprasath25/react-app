import * as ActionTypes from '../actions/auth';
import { routerReducer as routing } from 'react-router-redux';
import {combineReducers} from 'redux';
const jwtDecode = require('jwt-decode');

function checkTokenExpiry() {
	let jwt = localStorage.getItem('id_token')
	if(jwt) {
		let jwtExp = jwtDecode(jwt).exp;
		let expiryDate = new Date(0);
		expiryDate.setUTCSeconds(jwtExp);

		if(new Date() < expiryDate) {
			return true;
		}
	}
	return false;
}

function getProfile() {
	return JSON.parse(localStorage.getItem('profile'));
}

function auth(state = {
	isAunthenticated: checkTokenExpiry(),
	profile: getProfile(),
	error: null	
}, action {
	switch (action.type) {
		 case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        profile: action.profile,
        error: ''
      })
    case ActionTypes.LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        profile: null,
        error: action.error
      })
    case ActionTypes.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        profile: null
      })
    default:
      return state
	}
})