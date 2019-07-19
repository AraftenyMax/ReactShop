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
			let item = initialState.products.find(function(product) => {
				return element.id == action.payload.id;
			});
			if (item) {
				if (item.count >= action.payload.count) {
					let newState = { ...state };
					const { count } = action;
					if (!orderedProductsId.includes(item.id)){
						newState.orderedProducts.append({id: item.id, count: 0});
					}
					let orderedProductIndex = newState.orderedProducts.findIndex(
						(product) => product.id == item.id);
					let productIndex = newState.products.indexOf(item);
					newState.orderedProducts[orderedProductIndex].count += count;
					newState.products[productIndex].count -= count;
					return newState;
				}
			}
	}
}

const shop = combineReducers({
	products: products,
	busket: busket
});

export default shop;