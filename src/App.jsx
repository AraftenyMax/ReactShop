import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'react-redux';
import ProductsList from './components/ProductsList.jsx';
import ProductDetailed from './components/ProductDetailed.jsx';
import Busket from './components/Busket.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Router>
					<Header/>
					<Route path="/busket" component={Busket} />
					<Route path="/product/:id" component={ProductDetailed} />
					<Route path="/products/:page?" component={ProductsList} />
					<Footer/>
				</Router>
			</div>
			);
	}
}

export default App;