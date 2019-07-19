import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
	let id = ownProps.match.params.id;
	let product = state.products.find((prod) => prod.id == id);
	console.log(product, id);
	return {product: product};
}

class ProductDetailedConnected extends React.Component {
	constructor(props) {
		super(props);
		this.product = props.product;
		this.renderContent = this.renderContent.bind(this);
	}

	renderContent() {
		console.log(this.product);
		if (this.product) {
			return (<div className="product-detailed">
			<h1 className="product-detailed-name">{this.product.name}</h1>
			<div className="product-detailed-img-container">
				<img className="product-detailed-img" src={this.product.image} />
			</div>
			<p className="product-detailed-price">Price: {this.product.price}$</p>
			<p className="product-detailed-count">Available: {this.product.count}</p>
			<p className="product-detailed-seller">Seller: {this.product.sellerName}</p>
			<p className="product-detailed-os">OS: {this.product.os}</p>
			<p className="product-detailed-description">About product: {this.product.description}</p>
			</div>);
		}
		return <p className="product-detailed-error">Sorry, but this product doesn't available.</p>
	}

	render() {
		return this.renderContent();
	}
}

const ProductDetailed = connect(mapStateToProps)(ProductDetailedConnected);

export default ProductDetailed;