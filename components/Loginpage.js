import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
import {Button, Glyphicon, ProgressBar} from 'react-bootstrap';
import * as action from '../actions/login-action';

class Loginpage extends Component {
	handleClick(){
		this.getUserDetails();
	}
	getUserDetails() {
		window.IN.User.authorize(() => { 
            window.IN.API.Profile("me")
                .fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl", "email-address", "location:(name)"])
                .result((result) => {
                    alert("Successfull login from linkedin : "+ result.values[0].firstName + " " + result.values[0].lastName);            
                   	const loginResult = {
                   		"id" : result.values[0].id,
                   		"firstName":result.values[0].firstName,
                   		"lastName":result.values[0].lastName,
                   		"pictureUrl":result.values[0].pictureUrl,
                   		"publicProfileUrl":result.values[0].publicProfileUrl,
                   		"emailAddress":result.values[0].emailAddress,
                   		"location" : result.values[0].location.name
                   	}
                   	// Calling action
					this.getAuthorization(loginResult);
                })
                .error(function(err) {
                    console.log('Import error - Error occured while importing data')
                });
        });
	}
	getAuthorization(data) {		
		let postUrl = 'http://localhost:8000/aunthenticate';		
		axios.post(postUrl, data).then((result) => {			
			this.props.userLogin(result);
		}).catch(function(result) {
			console.log(result);
		});
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