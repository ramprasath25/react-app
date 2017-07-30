export default(state=[], action) => {
	switch(action.type) {
		case 'add_book':
			return [...state, 
				Object.assign({}, action.payload)
				];
		break;
		default:
			return state;
	}
}