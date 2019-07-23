import React from 'react';
import {connect} from 'react-redux';
import {addToBusket, deleteFromBusket} from '../reducers/actions.js';

function mapStateToProps(state, props) {
	let id = props.id;
	let item = state.busket.orderedProducts[id];
	let orderedCount = item ? item.count : 0;
	return {orderedCount: orderedCount};
}

class BusketCountControlsConnected extends React.Component {
	constructor(props) {
		super(props);
		this.productId = props.id;
		this.addToBusket = this.addToBusket.bind(this);
		this.deleteFromBusket = this.deleteFromBusket.bind(this);
		this.dispatch = props.dispatch.bind(this);
	}

	addToBusket(event) {
		let payload = addToBusket(this.productId);
		this.dispatch(payload);
	}

	deleteFromBusket(event) {
		if (this.props.orderedCount > 0) {
			let payload = deleteFromBusket(this.productId);
			this.dispatch(payload);
		}
	}

	render() {
		return (
			<div className="product-detailed-busket">
				<span className="product-detailed-busket-minus" onClick={this.deleteFromBusket}>-</span>
				<input className="product-detailed-busket-count" type="text" value={this.props.orderedCount}/>
				<span className="product-detailed-busket-plus" onClick={this.addToBusket}>+</span>
			</div>
			);
	}
}

const BusketCountControls = connect(mapStateToProps)(BusketCountControlsConnected);

export default BusketCountControls;