import React from 'react';
import {connect} from 'react-redux';
import ProductPreview from './ProductPreview.jsx';
import {selectProductsForPage} from '../reducers/reducers.js';

const showPerPage = 5;

function mapStateToProps(state, ownProps) {
	let page = ownProps.match.params.page;
	return {products: selectProductsForPage(state, page)};
}

class ProductsListConnected extends React.Component {
	constructor(props) {
		super(props);
		this.renderProductsList = this.renderProductsList.bind(this);
		this.products = props.products;
	}


	renderProductsList() {
		if (this.products) {
			const data = Object.keys(this.props.products).map((productId) => 
					<ProductPreview key={this.products[productId].name}
					 product={this.products[productId]} />);
			return data;
		} else {
			return (<p>Wrong page number</p>);
		}
	}

	render() {
		return (<div className="products-list">
			{this.renderProductsList()}
		</div>);
	}
}

const ProductsList = connect(mapStateToProps)(ProductsListConnected);

export default ProductsList;