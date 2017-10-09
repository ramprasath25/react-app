// Default State
const defaultState = {
	"loginDetails" : ""
}

export default(state = defaultState, action) => {
	switch (action.type) {
		case "loginSuccess":
			const newState = {
				"loginDetails" : action.payload
			}
			localStorage.setItem('loginDetails', JSON.stringify(newState));
		 	return newState;
			break;
		case "logout":
			window.IN.User.logout(function(data) {
				if(data == true) {
					localStorage.clear();
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