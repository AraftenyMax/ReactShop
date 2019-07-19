import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
	const {id} = ownProps.match.params.id;
	return {product: state.products.find((prod) => prod.id === id)};
}

class ProductDetailedConnected extends React.Component {
	constructor(props) {
		super(props);
		this.product = props.product;
	}

	renderContent() {
		if (this.product) {
			return (<div className="product-detailed">
			<h1 className="product-detailed-name">{this.product.name}</h1>
			<div className="product-detailed-image-container">
				<img className="product-detailed-image" src={this.product.image} />
			</div>
			<span className="product-detailed-price">Price: {this.product.price}$</span>
			<span className="product-detailed-count">Available: {this.product.count}</span>
			<p className="product-detailed-seller">Seller: {this.product.sellerName}</p>
			<p className="product-detailed-os">OS: {this.product.os}</p>
			<p className="product-detailed-description">{this.product.description}</p>
			</div>);
		}
		return <p className="product-detailed-error">Sorry, but this product doesn't available.</p>
	}

	render() {
		renderContent();
	}
}

const ProductDetailed = connect(mapStateToProps)(ProductDetailedConnected);

export default ProductDetailed;