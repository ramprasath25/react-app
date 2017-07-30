import React, {Component} from 'react';
import {connect} from 'react-redux';
import bookAction from '../../actions/bookAction';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
//Default State

const defaultState = {
	fetching:false,
	fetched:false,
	user:[],
	error: null
}

// User Reducer
const userReducer = function(state = {}, action) {
	switch(action.type) {
		case "fetch_users":
			state = Object.assign({}, state, {fetching: true});
			break;
		case "recieved_users":
			state = Object.assign({}, state, {fetching:false, fetched: true, user: action.payload});
			break;
		case "users_error":
			state = Object.assign({}, state, {fetching:false, error: action.payload});
			break;
	}
	return state;
}
// Tweet Reducer
const tweetReducer = function(state = [], action) {
	switch(action.type) {

	}
	return state;
}
// Combining Multiple Reducers..
const reducers = combineReducers({
	user: userReducer,
	tweet: tweetReducer
});


// Creating Middleware
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);
store.subscribe(() => {
	console.log("Store has been changed", store.getState());
});
//Dispatch the actions async
store.dispatch((dispatch) => {
	dispatch({type:"fetch_users"});
	axios.get('http://rest.learncode.academy/api/johnbob/friends').then((res)=>{
		dispatch({type:"recieved_users", payload: res.data});
	}).catch((e) =>{
		dispatch({type:"users_error", payload: e});
	});
});
class Bookpage extends Component {
	constructor() {
		super()
	}
	formSubmit(e){
		e.preventDefault();
		let bookName = this.refs.bookName.value;
		this.props.createBook(bookName);
		e.target.reset();
	}
	render(){		
		const bookList = this.props.route.books.map((book, index) => {
			return (
				<li key={index}>{book.name}</li>
			)
		});

		return(
			<div>
				<h1>Books</h1>
				<ul>{bookList}</ul>
				<form onSubmit={this.formSubmit.bind(this)}>
					<div className="input-group">
						<input type="text" name="name" ref="bookName" className="form-control" />
						<span className="input-group-btn">
							<input type="submit" className="btn btn-primary" value="Submit"/>
						</span>
					</div>
				</form>
			</div>
		)
	}	
}
//Mapping actions to props
const mapStateToProps = (state, ownProps) => {
	return {
		books: state.books
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		createBook: book => dispatch(bookAction.createBook(book))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookpage);