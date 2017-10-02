// Default State
const defaultState = {
	"loginDetails" : ""
}

export default(state = defaultState, action) => {
	switch (action.type) {
		case "loginSuccess":
			let newState = {
				"loginDetails" : "Success"
			}
		 	return newState;
			break;
		default:
			return state;
	}
	return state;
}