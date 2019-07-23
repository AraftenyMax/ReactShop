import React from 'react';
import {connect} from 'react-redux';
import {clearBusket, makeOrder} from '../reducers/actions.js';
import {selectBusketInfo} from '../reducers/reducers.js';
import BusketProductPreview from './BusketProductPreview.jsx';

function mapStateToProps(state, props) {
	return selectBusketInfo(state);
}

class BusketConnected extends React.Component {
	constructor(props) {
		super(props);
		this.onBusketClear = this.onBusketClear.bind(this);
		this.onMakeOrder = this.onMakeOrder.bind(this)
	}

	onBusketClear() {
		let payload = clearBusket();
		this.props.dispatch(payload);
	}

	onMakeOrder() {
		let payload = makeOrder();
		this.props.dispatch(payload);
	}

	renderContent() {
		if (this.props.products) {
			return (<div className="busket-products">
			{this.props.products.map((product, number) => <div key={product.id}>
				<BusketProductPreview number={number} product={product}/></div>)}
			<div className="busket-total-price">Total price: {this.props.totalPrice}$</div>
			</div>);
		}
		return <div className="content">Busket is empty</div>;
	}

	render() {
		return (<div className="busket">
			{this.renderContent()}
			<div className="busket-controls">
				<button onClick={this.onBusketClear}>Clear busket</button>
				<button onClick={this.onMakeOrder}>Make order</button>
			</div>
			</div>);
	}
}

const Busket = connect(mapStateToProps)(BusketConnected);

export default Busket;