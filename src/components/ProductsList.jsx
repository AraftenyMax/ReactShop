import React from 'react';
import {connect} from 'react-redux';
import ProductPreview from './ProductPreview.jsx';
import Pagination from './Pagination.jsx';
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
		this.page = props.match.params.page;
	}


	renderProductsList() {
		if (this.products) {
			const data = this.props.products.map((product) => 
					<ProductPreview key={product.name}
					 product={product} />);
			return data;
		} else {
			return (<p>Wrong page number</p>);
		}
	}

	render() {
		return (<div className="content">
		<div className="products-list">
			{this.renderProductsList()}
		</div>
		<Pagination page={this.page}/>
		</div>);
	}
}

const ProductsList = connect(mapStateToProps)(ProductsListConnected);

export default ProductsList;