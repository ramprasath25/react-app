import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as user from '../actions/userAction';

class userPage extends Component {
	componentWillMount() {
		this.props.user()		
	}
	componentDidMount() {
		this.props.recieveUser()
	}
	render() {		
		return (
			<h1>User page..{this.props.userList.user.name}</h1>
		)
	}
}

const mapStateToProps = state => {
	return{
		userList: state.users
	}	
}

const mapDispatchToProps = (dispatch) => {
	return {
		user: () => dispatch(user.fetchUsers("Ram1")),
		recieveUser: () => dispatch(user.recievedUsers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(userPage);