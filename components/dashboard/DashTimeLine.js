import React,{Component} from 'react';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';
import {connect} from 'react-redux';

class DashTimeLine extends React.Component {
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
									<img src={require('../../src/header.jpg')}/>
								</div>
								<div className="profile-section">
									<div className="row">
										<div className="col-lg-5 col-md-5 ">
											<ul className="profile-menu">
												<li>
													<a className="active">Timeline</a>
												</li>
												<li>
													<a>About</a>
												</li>
												<li>
													<a>Friends</a>
												</li>
											</ul>
										</div>
										<div className="col-lg-2"></div>
										<div className="col-lg-5 offset-lg-2 col-md-5 offset-md-2">
											<ul className="profile-menu">
												<li>
													<a>Photos</a>
												</li>
												<li>
													<a>Videos</a>
												</li>
												<li>
													<a>Videos</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="top-header-author">
										<img src={this.props.loginStatus.loginDetails.pictureUrl} className="img-circle img-thumbnail"/>
									<div className="author-content">
										<a className="h4 author-name">{p_name}</a>
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
										<span className="title">About Me:</span>
										<span className="text">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56.</span>
									</li>
									<li>
										<span className="title">Favourite TV Shows:</span>
										<span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
									</li>
									<li>
										<span className="title">Favourite Music Bands / Artists:</span>
										<span className="text">Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 order-xl-3 col-lg-8 order-lg-3 col-md-9 col-sm-12 col-xs-12">
						<div id="newsfeed-items-grid">
							<div className="ui-block">
								<article className="hentry post">

									<div className="post__author author vcard inline-items">
										<img src={p_img} alt="author"/>

										<div className="author-date">
											<a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
											<div className="post__date">												
											</div>
										</div>

										<div className="more"><svg className="olymp-three-dots-icon"></svg>
											<ul className="more-dropdown">
												<li>
													<a href="#">Edit Post</a>
												</li>
												<li>
													<a href="#">Delete Post</a>
												</li>
												<li>
													<a href="#">Turn Off Notifications</a>
												</li>
												<li>
													<a href="#">Select as Featured</a>
												</li>
											</ul>
										</div>

									</div>

									<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
										pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
										mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
										accusantium doloremque.
									</p>

									<div className="post-additional-info inline-items">
										<div className="comments-shared">
											<a href="#" className="post-add-icon inline-items">
												<svg className="olymp-speech-balloon-icon"></svg>
												<span>17</span>
											</a>
											<a href="#" className="post-add-icon inline-items">
												<svg className="olymp-share-icon"></svg>
												<span>24</span>
											</a>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
				<a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
							<svg className="olymp-three-dots-icon"></svg><div className="ripple-container"></div>
						</a>
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