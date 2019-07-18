import {ADD_TO_BUSKET, DELETE_FROM_BUSKET,
 UPDATE_ORDERED_COUNT, RECEIVE_PRODUCTS,
  GET_PRODUCT_BY_ID, GET_PRODUCTS_PAGE} from '../constants/ActionTypes.js';
import {fetchProducts} from './actions.js';
import {combineReducers, createStore} from 'redux';

const showPerPage = 5;

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
/*
const busket = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TO_BUSKET:
			let item = initialState.products.find(function(product) => {
				return element.id == action.productId;
			});
			if (item != undefined) {
				if (item.count >= action.orderedCount) {
					if (!orderedProductsId.includes(item.id)){
						orderedProductsId.append(item.id);
					}

				}
			}
	}
}*/

const shop = combineReducers({
	products: products
});

export default shop;