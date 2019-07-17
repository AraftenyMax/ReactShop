import React from 'react';
import Products from './Products.js';

class ProductsList extends React.Component {
	constructor(props) {
		super(props);
		this.page = props.match.params.page;
	}

	render() {
		return (<div>Products list page {this.page}.</div>);
	}
}

export default ProductsList;