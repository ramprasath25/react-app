import React from 'react';
import {Link} from 'react-router';
import Navlinks from './Navlinks';
import { login, logout, isLoggedIn } from './Auth';
class Header extends React.Component {
	render() {
		return(
			<div>				
				<nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to='/'><a className="navbar-brand">React App</a></Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <Navlinks to="/"  activeClassName="active" onlyActiveOnIndex>Home</Navlinks>
                                <Navlinks to="/about" activeClassName="active">About</Navlinks>                                
                                {
                                 (isLoggedIn()) ?   <Navlinks to="/users" activeClassName="active">Users</Navlinks>: ''
                                }
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
						      {
                                 (isLoggedIn()) ? (<Navlinks to="/login" onClick={() => logout()}><span className="glyphicon glyphicon-user"></span> Logout</Navlinks>): (<Navlinks to="/login" onClick={() => login()}><span className="glyphicon glyphicon-user"></span> Sign In</Navlinks>)
						      }
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