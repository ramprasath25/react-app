import { push } from 'react-router-redux';

// Default State
const defaultState = {
	"loginDetails" : ""
}

export default(state = defaultState, action) => {
	switch (action.type) {
		case "loginSuccess":
			const newState = {
				"loginDetails": action.payload.data.userInfo
			}			
			localStorage.setItem('loginDetails', JSON.stringify(newState));
			window.location = '/dashboard/timeline';
		 	return newState;
			break;
		case "logout":
			window.IN.User.logout(function(data){
				if(data) {
					localStorage.clear();
					window.location = '/';
					return defaultState;
				}
			});						
						
			break;
		default:
			const storedState = JSON.parse(localStorage.getItem('loginDetails'));
			if(storedState !== '' && storedState !== null) {
				return storedState;
			} else {
				return state;
			}			
	}
}