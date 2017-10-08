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
		default:
			const storedState = JSON.parse(localStorage.getItem('loginDetails'));
			if(storedState !== '') {
				return storedState;
			} else {
				return state;
			}			
	}
}