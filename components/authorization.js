export function isLoggedIn() {
	const getAccessToken = JSON.parse(localStorage.getItem('ACCESS_TOKEN_KEY'));	
	if(getAccessToken !== null && getAccessToken.access_token !== '' && getAccessToken.access_token !== null) {
		return true;
	} else {
		return false;
	}		
}

export function getUserDetails() {
	const getAccessToken = JSON.parse(localStorage.getItem('ACCESS_TOKEN_KEY'));	
	if(getAccessToken !== null && getAccessToken.access_token !== '' && getAccessToken.access_token !== null) {
		return getAccessToken;
	} else {
		return false;
	}	
}