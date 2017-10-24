import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {isLoggedIn, getUserDetails} from './authorization';
import * as action from '../actions/login-action';
import * as ReactBootstrap from 'react-bootstrap';

class Header extends React.Component {
    logout() {
        this.props.logout();
    }
	render() {
        const islogin = ((this.props.loginStatus.loginDetails !== '') ? true : false);        
        const p_img = this.props.loginStatus.loginDetails.pictureUrl;
        const p_name = this.props.loginStatus.loginDetails.firstName +" "+this.props.loginStatus.loginDetails.lastName;
		return(
			<div>				
				<ReactBootstrap.Navbar>
                    <ReactBootstrap.Navbar.Header>
                      <ReactBootstrap.Navbar.Brand>
                        <small>React-App</small>
                      </ReactBootstrap.Navbar.Brand>
                    </ReactBootstrap.Navbar.Header>
                    <ReactBootstrap.Nav>
                      <ReactBootstrap.NavItem eventKey={1} href="/">Home</ReactBootstrap.NavItem>
                      <ReactBootstrap.NavItem eventKey={2} href="/about">About us</ReactBootstrap.NavItem>
                      { (islogin) ? 
                        <ReactBootstrap.NavItem eventKey={3} href="/dashboard">Dashboard</ReactBootstrap.NavItem> : ''}
                    </ReactBootstrap.Nav>                    
                        { (islogin) ?
                            <ReactBootstrap.Nav pullRight>                                
                                <ReactBootstrap.Navbar.Brand>
                                <ReactBootstrap.Image className="headerProfileImage" src={p_img} circle />        
                                </ReactBootstrap.Navbar.Brand>
                                <ReactBootstrap.NavDropdown eventKey={5} title={"Hi "+p_name} id="basic-nav-dropdown">
                                    <ReactBootstrap.MenuItem eventKey={5.1}>Account</ReactBootstrap.MenuItem>
                                    <ReactBootstrap.MenuItem divider />
                                    <ReactBootstrap.MenuItem eventKey={5.4} onClick={this.logout.bind(this)}>Logout</ReactBootstrap.MenuItem>
                                </ReactBootstrap.NavDropdown>
                            </ReactBootstrap.Nav>
                            :
                            <ReactBootstrap.Nav pullRight> 
                                <ReactBootstrap.NavItem eventKey={4} href="/login">Sign In</ReactBootstrap.NavItem>
                            </ReactBootstrap.Nav>
                        }
                </ReactBootstrap.Navbar>
				<div>
				{this.props.children}
				</div>
                <div className="footer">
                    <div className="container"><b>copyright &copy; 2017</b></div>
                </div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginDetails
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        logout : () => dispatch(action.logoutUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);