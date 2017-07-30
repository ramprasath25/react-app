import {combineReducers} from 'redux';
import bookReducers from './bookReducer';

export default combineReducers ({
	books: bookReducers
})