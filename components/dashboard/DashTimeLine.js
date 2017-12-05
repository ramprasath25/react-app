import React,{Component} from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect, Link} from 'react-router';
import {connect} from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
class DashTimeLine extends React.Component {
	constructor () {
		super();		
	}		
	render(){
			const p_img = this.props.loginStatus.loginDetails.pictureUrl;
        	const p_name = this.props.loginStatus.loginDetails.firstName +" "+this.props.loginStatus.loginDetails.lastName;
			const p_location = this.props.loginStatus.loginDetails.location;
			const tooltip = (
				<ReactBootstrap.Tooltip id="tooltip"><strong>Get Connected</strong></ReactBootstrap.Tooltip>
			);
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
												<Link to="/dashboard/timeline" className="active">Timeline</Link>
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
												<Link to="/dashboard/account">Account</Link>
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
								<h6 className="title">Profile Intro</h6>
							</div>
							<div className="ui-block-content">
								<ul className="widget w-personal-info item-block">
									<li>
										<span className="title">Last Account Activity</span>
										<span className="text">4 hours ago</span>
									</li>
									<li>
										<span className="title">Favourite TV Shows:</span>
										<span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
									</li>										
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 order-xl-3 col-lg-8 order-lg-3 col-md-9 col-sm-12 col-xs-12">
						<div className="ui-block">
							<div className="news-feed-form">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item">
										<a className="nav-link inline-items active" data-toggle="tab" href="#home-1" role="tab" aria-expanded="true">
											<i className="fa fa-pencil-square"></i>
											<span>Status</span>
											<div className="ripple-container"></div></a>
									</li>
								</ul>
									<div className="tab-content">
									<div className="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
										<form>
											<div className="author-thumb">
												<img src={this.props.loginStatus.loginDetails.pictureUrl} alt="author" />
											</div>
											<div className="form-group with-icon label-floating is-empty">
												<textarea className="form-control" placeholder="Share what you are thinking here..."></textarea>
												</div>
											<div className="add-options-message">
												<button className="btn btn-primary btn-md-4">Post Status</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 order-xl-1 col-lg-4 order-lg-2 col-md-3 col-sm-12 col-xs-12">
						<div id="newsfeed-items-grid">
							<div className="ui-block">
								<article className="hentry post">
									<div className="post__author author vcard inline-items">
										<img src={p_img} alt="author" />
										<div className="author-date">
											<a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
											<div className="post__date">
												1 hr ago
											</div>
										</div>
										<div className="more">
											<ReactBootstrap.OverlayTrigger placement="right" overlay={tooltip}>
												<a className="send-request"><i className="fa fa-user-plus"></i></a>
											</ReactBootstrap.OverlayTrigger>
										</div>
									</div>
									<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
										pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
										mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
										accusantium doloremque.
									</p>
								</article>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center"><button className="btn btn-primary">Load More</button></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DashTimeLine);