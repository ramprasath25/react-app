//Default State
const defaultState = {
	fetching:false,
	fetched:false,
	user: {
		name: "Ram",
		age: 26
	},
	error: null
}

export default (state = defaultState, action) =>{
	switch(action.type) {
		case "fetch_users":			
			state = Object.assign({}, 
						state, 
						{
							fetching: true, 
							user: action.payload
						});
			break;
		case "recieved_users":
		
			state = Object.assign({}, 
						state, 
						{
							fetching:false, 
							fetched: true, 
							user: action.payload.user[10]
						});
			break;
		case "users_error":
			state = Object.assign({}, 
						state, 
						{
							fetching:false, 
							error: action.payload
						});
			break;
	}
	return state;
}