import React,{Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import querystring from 'querystring';
import {Button, Glyphicon} from 'react-bootstrap';
class Loginpage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginDetails : ''
		}
	}	
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
                   
                    this.setState({
                    	loginDetails : result.values[0]
                    });
                    this.getAuthorization();
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
		window.IN.User.logout(function(data) {
			if(data == true) {
				localStorage.clear();	
			}			
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
							<Button bsSize="large" block>
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
export default Loginpage;