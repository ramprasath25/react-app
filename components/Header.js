import React from 'react';
import {Link} from 'react-router';
import Navlinks from './Navlinks';
import {isLoggedIn, getUserDetails} from './authorization';
import * as ReactBootstrap from 'react-bootstrap';
class Header extends React.Component {
    componentWillMount() {
        console.log(getUserDetails());
    } 
	render() {
        const userDetails = getUserDetails();
		return(
			<div>				
				<nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to='/'><span className="navbar-brand">React App</span></Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <Navlinks to="/"  activeClassName="active" onlyActiveOnIndex>Home</Navlinks>
                                <Navlinks to="/about" activeClassName="active">About</Navlinks>                                
                                <Navlinks to="/users" activeClassName="active">Users</Navlinks>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                
                                {((isLoggedIn() !== false) ?                
                                    <Navlinks to="/signout">Hi {userDetails.firstName}{userDetails.lastName}
                                    <span className="glyphicon glyphicon-log-out"></span></Navlinks> : 
                                    <Navlinks to="/login"><img src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=25" alt="user-img" className="img-circle"/> Sign In</Navlinks> )}						        
                            </ul>
                        </div>
                    </div>
                </nav>
				<div className="container">
				{this.props.children}
				</div>
			</div>
		)
	}
}

module.exports = Header;