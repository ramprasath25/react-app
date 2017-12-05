import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect, Link} from 'react-router';
import {connect} from 'react-redux';

class DashAccount extends React.Component {
	constructor () {
		super();		
	}		
	render(){
			const p_img = this.props.loginStatus.loginDetails.pictureUrl;
        	const p_name = this.props.loginStatus.loginDetails.firstName +" "+this.props.loginStatus.loginDetails.lastName;
			const p_location = this.props.loginStatus.loginDetails.location;

		return(
			<div className="container">	
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="top-header">
							<div className="top-header-thumb">
								<img src={require('../../src/header.jpg')} />
							</div>
							<div className="profile-section">
								<div className="row">
									<div className="col-lg-5 col-md-5 ">
										<ul className="profile-menu">
											<li>
												<Link to="/dashboard/timeline">Timeline</Link>
											</li>
											<li>
												<Link to="/dashboard/about">About</Link>
											</li>
											<li>
												<Link to="/dashboard/friends">Friends</Link>
											</li>
										</ul>
									</div>
									<div className="col-lg-2"></div>
									<div className="col-lg-5 offset-lg-2 col-md-5 offset-md-2">
										<ul className="profile-menu">
											<li>
												<Link to="/dashboard/account" className="active">Account</Link>
											</li>
											<li>
												<Link>Blogs</Link>
											</li>
											<li>
												<Link>Videos</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="top-header-author">
								<img src={this.props.loginStatus.loginDetails.pictureUrl} className="img-circle img-thumbnail" />
								<div className="author-content">
									<span className="h4 author-name">{p_name}</span>
									<div className="country">{p_location}</div>
								</div>
							</div>
						</div>
						<div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 order-xl-1 col-lg-4 order-lg-2 col-md-3 col-sm-12 col-xs-12">
						<div className="ui-block">
							<div className="ui-block-title">
								<h6 className="title">Cover photo</h6>
							</div>
							<div className="ui-block-content">
								<ul className="widget w-personal-info item-block">
									<li>
										<span>1,920 X 640px recommended</span>
										<label htmlFor="file-upload" className="custom-file-upload btn btn-default btn-lg btn-block">
											<i className="fa fa-cloud-upload"></i> Custom Upload
											<input id="file-upload" type="file" />
										</label>										
									</li>									
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-9 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12">
						<div className="ui-block">
							<div className="ui-block-title">
								<h6 className="title">Change Password</h6>
							</div>
							<div className="ui-block-content">
								<form>
									<div className="row">
										<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
											<div className="form-group label-floating">
												<label className="control-label">Confirm Current Password</label>
												<input className="form-control" placeholder="" type="password" />
													<span className="material-input"></span></div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
												<div className="form-group label-floating is-empty">
													<label className="control-label">Your New Password</label>
													<input className="form-control" placeholder="" type="password" />
														<span className="material-input"></span></div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
													<div className="form-group label-floating is-empty">
														<label className="control-label">Confirm New Password</label>
														<input className="form-control" placeholder="" type="password" />
															<span className="material-input"></span></div>
													</div>
													<div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
														<div className="remember">
															<div className="checkbox">
																<label>
																	<input name="optionsCheckboxes" type="checkbox"/><span className="checkbox-material"><span className="check"></span></span>
																		Remember Me
																	</label>
																</div>
															</div>
														</div>
														<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
															<button className="btn btn-primary btn-lg full-width">Change Password Now!</button>
														</div>
													</div>
												</form>
											</div>
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
		
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(DashAccount);