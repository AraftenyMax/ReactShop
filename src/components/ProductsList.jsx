import React from 'react';
import {connect} from 'react-redux';
import ProductPreview from './ProductPreview.jsx';

const showPerPage = 5;

const mapStateToProps = state => {
	return {products: state.products};
}

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.getProductsForPage = this.getProductsForPage.bind(this);
		this.renderProductsList = this.renderProductsList.bind(this);
		this.page = props.match.params.page;
		this.products = this.getProductsForPage(props.products);
	}

	getProductsForPage(productsList) {
		let lowerBound = this.page * showPerPage;
		let upperBound = lowerBound + showPerPage;
		return productsList.slice(lowerBound, upperBound);
	}

	renderProductsList() {
		if (this.products) {
			const data = this.products.map((product) => 
					<ProductPreview key={product.name} product={product} />);
			console.log(data);
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

const ProductsList = connect(mapStateToProps)(Products);

export default ProductsList;