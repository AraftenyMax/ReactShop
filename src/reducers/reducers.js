import {ADD_TO_BUSKET, DELETE_FROM_BUSKET,
 UPDATE_ORDERED_COUNT, RECEIVE_PRODUCTS,
  GET_PRODUCT_BY_ID, GET_PRODUCTS_PAGE} from '../constants/ActionTypes.js';
import {fetchProducts} from './actions.js';
import {combineReducers, createStore} from 'redux';

const initialState = {
	orderedProducts: [],
	products: [],
	productsPerPage: 5
}

initialState.products = fetchProducts();

const products = (state = initialState.products, action) => {
	switch(action.type) {
	case GET_PRODUCT_BY_ID:
		return state.find((product) => product.id === action.id);
	default:
		return state;
	}
}

const busket = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TO_BUSKET:
			let item = initialState.products.find((product) => product.id == action.payload.id);
			if (item) {
				if (item.count > 0) {
					let newState = { ...state };
					if (!newState.orderedProducts.includes(item.id)){
						newState.orderedProducts.push({id: item.id, count: 0});
					}
					let orderedProductIndex = newState.orderedProducts.findIndex(
						(product) => product.id == item.id);
					let productIndex = newState.products.indexOf(item);
					newState.orderedProducts[orderedProductIndex].count++;
					newState.products[productIndex].count--;
					return newState;
				}
			}
			return state;
		case DELETE_FROM_BUSKET:
			let orderedIndex = state.orderedProducts.findIndex((product) => product.id == action.payload.id);
			if (orderedIndex != -1) {
				if (state.orderedProducts[orderedIndex].count > 0) {
					let newState = { ...state };
					let productIndex = newState.products.findIndex((product) => product.id == action.payload.id);
					newState.orderedProducts[orderedIndex].count -= action.payload.count;
					newState.products[productIndex].count += action.payload.count;
					if (newState.orderedProducts[orderedIndex].count <= 0) {
						newState.orderedProducts.splice(orderedIndex, 1);
					}
					return newState;
				}
			}
			return state;
		default:
			return state;
	}
}

const shop = combineReducers({
	busket: busket,
	products: products
});

export default shop;