import React,{Component} from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect, Link} from 'react-router';
import {connect} from 'react-redux';

class DashFriends extends React.Component {
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
												<Link to="/dashboard/friends" className="active">Friends</Link>
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
					<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6">
						<div className="ui-block">
							<div className="friend-item">
								<div className="friend-header-thumb">
									<img src="img/friend1.jpg" alt="friend" />
								</div>

								<div className="friend-item-content">

									<div className="more">
										<svg className="olymp-three-dots-icon"></svg>
										<ul className="more-dropdown">
											<li>
												Delete Request
											</li>											
										</ul>
									</div>
									<div className="friend-avatar">
										<div className="author-thumb">
											<img src="img/avatar1.jpg" alt="author" />
										</div>
										<div className="author-content">
											<a href="#" className="h5 author-name">Nicholas Grissom</a>
											<div className="country">San Francisco, CA</div>
										</div>
									</div>

									<div className="swiper-container swiper-swiper-unique-id-0 initialized swiper-container-horizontal" data-slide="fade" id="swiper-unique-id-0">
										<div className="swiper-wrapper">
											<p className="friend-about">
												Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
									</p>

											<div className="friend-since" data-swiper-parallax="-100">
												<span>Friends Since:</span>
												<div className="h6">December 2014</div>
											</div>
										</div>
										<div className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next">
											<div className="friend-count" >
												<a href="#" className="friend-count-item">
													<div className="h6">52</div>
													<div className="title">Friends</div>
												</a>
												<a href="#" className="friend-count-item">
													<div className="h6">240</div>
													<div className="title">Photos</div>
												</a>
												<a href="#" className="friend-count-item">
													<div className="h6">16</div>
													<div className="title">Videos</div>
												</a>
											</div>
											<div className="control-block-button">
												<a href="#" className="btn btn-control bg-blue">
													<svg className="olymp-happy-face-icon"></svg>
												</a>

												<a href="#" className="btn btn-control bg-purple">
													<svg className="olymp-chat---messages-icon"></svg>
												</a>

											</div>
										</div>
									</div>
								</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DashFriends);