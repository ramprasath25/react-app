import React,{Component} from 'react';
import {Link} from 'react-router';

class Loginpage extends Component {
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
			                <input type="text" className="form-control" placeholder="Email" required autofocus/>
			                <input type="password" className="form-control" placeholder="Password" required/>
			                <button className="btn btn-lg btn-primary btn-block" type="submit">
			                    Sign in</button>
			                <label className="checkbox pull-left">
			                    <input type="checkbox" value="remember-me"/>
			                    Remember me
			                </label>
			                <a className="pull-right need-help">Need help? </a><span className="clearfix"></span>
			                </form>	                
							<p className="text-center">OR</p>
			                <span title="Facebook" className="fa fa-facebook"></span>
							<span title="Twitter" className="fa fa-twitter"></span>
							<span title="Google" className="fa fa-google"></span>
							<span title="Linkedin" className="fa fa-linkedin"></span>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
}
export default Loginpage;