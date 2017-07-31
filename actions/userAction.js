import axios from 'axios';
// Fetching User
export function fetchUsers(userName) {
	return {
		type: "fetch_users",
		payload: {
			"name": userName,
			"age": 26
		}
	}
}
// User List from the server
export function recievedUsers(userList) {
	return function(dispatch){
		axios.get('http://rest.learncode.academy/api/johnbob/friends').then((res)=>{
			dispatch({type:"recieved_users", payload: res.data});
		}).catch((e) =>{
			dispatch({type:"users_error", payload: e});
		});
	}
}
