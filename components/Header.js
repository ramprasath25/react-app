import React from 'react';
import {Link} from 'react-router';
import Navlinks from './Navlinks';
import {isLoggedIn, getUserDetails} from './authorization';
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
                                    <Navlinks to="/login"><span className="glyphicon glyphicon-user"></span> Sign In</Navlinks> )}						        
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