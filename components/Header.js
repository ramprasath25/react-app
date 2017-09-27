import React from 'react';
import {Link} from 'react-router';
import Navlinks from './Navlinks';
import {isLoggedIn, getUserDetails} from './authorization';
import * as ReactBootstrap from 'react-bootstrap';
import {LinkContainer } from 'react-router-bootstrap';
class Header extends React.Component {     
	render() {
        const islogin = isLoggedIn();
		return(
			<div>				
				<ReactBootstrap.Navbar collapse>
                    <ReactBootstrap.Navbar.Header>
                      <ReactBootstrap.Navbar.Brand>
                        <small>React-App</small>
                      </ReactBootstrap.Navbar.Brand>
                    </ReactBootstrap.Navbar.Header>
                    <ReactBootstrap.Nav>
                      <ReactBootstrap.NavItem eventKey={1} href="/">Home</ReactBootstrap.NavItem>
                      <ReactBootstrap.NavItem eventKey={2} href="/about">About us</ReactBootstrap.NavItem>
                    </ReactBootstrap.Nav>                    
                        {((islogin !== true) ?
                            <ReactBootstrap.Nav pullRight> 
                                <ReactBootstrap.NavItem eventKey={1} href="/login">Sign In</ReactBootstrap.NavItem>
                            </ReactBootstrap.Nav>
                                :
                            <ReactBootstrap.Nav pullRight>
                                <ReactBootstrap.Navbar.Brand>
                                    <ReactBootstrap.Image src="https://facebook.github.io/react/img/logo.svg" circle/>
                                </ReactBootstrap.Navbar.Brand>                        
                                <ReactBootstrap.NavDropdown eventKey={3} title="Hi Ramprasath" id="basic-nav-dropdown">
                                    <ReactBootstrap.MenuItem eventKey={3.1}>Account</ReactBootstrap.MenuItem>
                                    <ReactBootstrap.MenuItem divider />
                                    <ReactBootstrap.MenuItem eventKey={3.4}>Logout</ReactBootstrap.MenuItem>
                                </ReactBootstrap.NavDropdown>
                            </ReactBootstrap.Nav>
                        )}
                </ReactBootstrap.Navbar>
				<div className="container">
				{this.props.children}
				</div>
			</div>
		)
	}
}

module.exports = Header;