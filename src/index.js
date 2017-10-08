import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from '../components/route';
import './styles.css';
//Importing Store from config file
import store from './store.js';

// Rendering Element
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('app'));