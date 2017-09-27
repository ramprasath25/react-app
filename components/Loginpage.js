import React,{Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import querystring from 'querystring'
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
			<div className="container">
			    <div className="row">
			        <div className="col-sm-6 col-md-4 col-md-offset-4">
			            <h1 className="text-center login-title">Welcome User </h1>
			            <div className="account-wall">
			                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
			                    alt=""/>
			                <form className="form-signin">
			                <input type="text" className="form-control" placeholder="Email" required autoFocus/>
			                <input type="password" className="form-control" placeholder="Password" required/>
			                <button className="btn btn-lg btn-primary btn-block" type="submit">
			                    Sign in</button>
			                <div className="row">
			                	<div className="col-md-6">
			                		<label className="rememberme">
			                    	<input type="checkbox" value="remember-me" />
			                    	Remember me
			                		</label>
		                		</div>
		                		<div className="col-md-6">
			                		<span className="pull-right need-help">Need help? </span><span className="clearfix"></span>
		                		</div>
	                		</div>
			                </form>	                
							<p className="text-center">OR</p>
			                <div className="text-center">
			                	<img src={require('../src/SignIn.png')} onClick={this.handleClick.bind(this)}/>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
}
export default Loginpage;