import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import {Provider} from 'react-redux';
import shop from './src/reducers/reducers.js';
import {createStore} from 'redux';

const store = createStore(shop);

ReactDOM.render(
	<Provider store={store}>
	<App/>
	</Provider>, document.getElementById("app"));