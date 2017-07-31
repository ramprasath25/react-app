import {createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//Importing Combined Reducers
import reducers from '../reducers/index';

//Configuring Middleware
const middleware = applyMiddleware(logger, thunk);

//Exporting Store
export default createStore(reducers, middleware);