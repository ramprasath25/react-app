import {createStore} from 'redux';
import reducers from '../reducers/index';

export default function configureStore(intialState) {
	return createStore(reducers, intialState)
}