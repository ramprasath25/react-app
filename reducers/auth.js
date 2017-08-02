import {CALL_API} from '../middleware/api';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginSuccess(profile) {
	return {
		type: LOGIN_SUCCESS,
		payload: profile
	}
}

function loginError(err) {
	return {
		type: LOGIN_ERROR,
		payload: err
	}
}

export function login() {
	const lock = new Auth0Lock('AUTH0_CLIENT_ID', 'AUTH0_DOMAIN')
	return dispatch => {
		lock.show((err, profile, token) => {
			if(err) {
				return dispatch(loginError(err))
			}
			localStorage.setItem('profile', JSON.stringify(profile))
			localStorage.setItem('id_token', token)
			return dispatch(loginSuccess(profile))
		})
	}
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function  logoutSuccess(profile) {
	return {
		type: LOGOUT_SUCCESS
	}
}

export function logout() {
	return dispatch => {
		localStorage.removeItem('id_token');
		localStorage.removeItem('profile');
		return dispatch(logoutSuccess());
	}
}

export const JEDIS_REQUEST = 'JEDIS_REQUEST'
export const JEDIS_SUCCESS = 'JEDIS_SUCCESS'
export const JEDIS_FAILURE = 'JEDIS_FAILURE'

function fetchJedis() {
	return {
		[CALL_API] : {
			types: [JEDIS_REQUEST, JEDIS_SUCCESS, JEDIS_FAILURE],
			endpoint: 'jedis',
			authenticatedRequest: false
		}
	}
}

export function loadJedis() {
	return dispatch => {
		return dispatch(fetchJedis())
	}
}