import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
import {Button, Glyphicon} from 'react-bootstrap';
import * as action from '../actions/login-action';

class Loginpage extends Component {
	handleClick(){
		window.IN.init({
			api_key : '81yrfrfgcu5cku',
			authorize: true
		});
		setTimeout(function(){
			this.getUserDetails()
		}.bind(this), 1000);
	}
	getUserDetails() {
		window.IN.User.authorize(() => { 
            window.IN.API.Profile("me")
                .fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl", "email-address"])
                .result((result) => {
                    alert("Successfull login from linkedin : "+ result.values[0].firstName + " " + result.values[0].lastName);                   
                   	const loginResult = {
                   		"id" : result.values[0].id,
                   		"firstName":result.values[0].firstName,
                   		"lastName":result.values[0].lastName,
                   		"pictureUrl":result.values[0].pictureUrl,
                   		"publicProfileUrl":result.values[0].publicProfileUrl,
                   		"emailAddress":result.values[0].emailAddress
                   	}
                   	// Calling action
                   	this.props.userLogin(loginResult);
                })
                .error(function(err) {
                    console.log('Import error - Error occured while importing data')
                });
        });
	}
	getAuthorization() {		
		let postUrl = 'http://localhost:8000/aunthenticate';
		const data = this.state.loginDetails;
		const postData = {
			id: data.id,
	        firstName: data.firstName,
	        lastName: data.lastName,
	        pictureUrl: data.pictureUrl,
	        publicProfileUrls: data.publicProfileUrl,
	        emailAddress: data.emailAddress
		}
		axios.post(postUrl, postData).then((result) => {
			this.setState({
				loginDetails: result.data.userInfo
			})
			this.setAccessToken();
		}).catch(function(result) {
			console.log(result);
		});
	}
	setAccessToken() {
		const userDetails = JSON.stringify(this.state.loginDetails);
		localStorage.setItem('ACCESS_TOKEN_KEY', userDetails);
	}
	getAccessToken() {
		const getAccessToken = JSON.parse(localStorage.getItem('ACCESS_TOKEN_KEY'));
		return getAccessToken.access_token
	}
	logOut() {
		
	}
	render() {	
		return (
			<div className="loginPage">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<img src={require('../src/coworkers.png')}/>
						</div>
						<div className="col-md-6"><br/><br/><br/><br/><br/><br/>
							<h2 className="text-center">Find your Co-worker</h2><br/><br/>							
							<Button bsSize="large" block onClick={this.handleClick.bind(this)}>
								<h5>Get Started with 
									<span className="login-linkedin">Linked</span>
									<i className="fa fa-linkedin-square"></i>
								</h5>
							</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) =>{
	return {
		loginStatus : state.loginDetails
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		userLogin : (values) => dispatch(action.loginSuccess(values))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);