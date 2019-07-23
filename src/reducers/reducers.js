import {ADD_TO_BUSKET, DELETE_FROM_BUSKET, REMOVE_FROM_BUSKET,
  GET_PRODUCT_BY_ID, MAKE_ORDER, CLEAR_BUSKET } from '../constants/ActionTypes.js';
import {fetchProducts} from './actions.js';
import {combineReducers, createStore} from 'redux';

const initialState = {
	orderedProducts: {},
	products: {},
}

const productsPerPage = 5;
const pagingLimit = 4;
const range = (start, stop, step) => 
	Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

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
	let newState = {};
	switch(action.type) {
		case ADD_TO_BUSKET:
			let product = state.products[action.payload.id];
			if (product) {
				if (product.count > 0) {
					let productId = product.id;
					newState = Object.assign({}, state);
					if (!(productId in newState.orderedProducts)){
						newState.orderedProducts[productId] = {count: 0};
					}
					let count = action.payload.count
					newState.orderedProducts[productId].count += count;
					newState.products[productId].count -= count;
					return newState;
				}
			}
			return state;
		case DELETE_FROM_BUSKET:
			let orderedProduct = state.orderedProducts[action.payload.id];
			if (orderedProduct) {
				let productId = action.payload.id;
				newState = Object.assign({}, state);
				let count = action.payload.count;
				newState.orderedProducts[productId].count -= count;
				newState.products[productId].count += count;
				if (newState.orderedProducts[productId].count <= 0) {
					delete newState.orderedProducts[productId];
				}
				return newState;
			}
			return state;
		case REMOVE_FROM_BUSKET:
			newState = Object.assign({}, state);
			newState.products[action.payload.id].count += newState.orderedProducts[action.payload.id].count;
			delete newState.orderedProducts[action.payload.id];
			return newState;
		case CLEAR_BUSKET:
			newState = Object.assign({}, state);
			Object.keys(newState.orderedProducts).map((productId) => {
				newState.products[productId].count += newState.orderedProducts[productId].count;
			});
			newState.orderedProducts = {};
			return newState;
		case MAKE_ORDER:
			newState = Object.assign({}, state);
			newState.orderedProducts = {};
			return newState;
		default:
			return state;
	}
}

export function selectProductsForPage(state, page) {
	let offset = (page - 1) * productsPerPage;
	let limit = offset + productsPerPage;
	if (limit > Object.keys(state.products).length == true)
		limit = Object.keys(state.products).length;
	return Object.values(state.products).slice(offset, limit);
}

export function selectPagination(state, page) {
	let offset = page;
	let leftLimit = page - pagingLimit;
	let rightLimit = page + pagingLimit;
	if (leftLimit < 0)
		leftLimit = 0;
	let productPages = Object.keys(state.products).length / productsPerPage;
	if (rightLimit > productPages)
		rightLimit = productPages;
	let pages = range(leftLimit, rightLimit, 1);
	return pages;
}

export function selectProductPrice(state, id) {
	let orderedProduct = state.busket.orderedProducts[id];
	let item = state.products[id];
	return orderedProduct.count * item.price;
}

export function selectProductPrices(state) {
	return Object.keys(state.busket.orderedProducts).map(
		(productId) => selectProductPrice(state, productId));
}

export function selectBusketPrice(state) {
	let prices = selectProductPrices(state);
	return prices.reduce((totalPrice, productPrice) => { return totalPrice + productPrice }, 0);
}

export function selectProductsCount(state) {
	let orderedProducts = state.busket.orderedProducts;
	let count = 0;
	console.log(orderedProducts);
	if (orderedProducts) {
		count = Object.keys(orderedProducts).reduce((totalCount, productId) => {
		 	return totalCount + state.busket.orderedProducts[productId].count;
		}, 0);
	}
	return count;
}

export function selectOrderedProducts(state) {
	let orderedProductsIds = selectOrderedProductsIds(state);
	let orderedProducts = Object.keys(orderedProductsIds).map((orderedProductId) => {
		return state.products[orderedProductId];
	});
	return orderedProducts;
}

export function selectOrderedProductsIds(state) {
	return state.busket.orderedProducts;
}

export function selectBusketInfo(state) {
	if (!Object.keys(state.busket.orderedProducts).length) return {};
	let orderedProductsIds = selectOrderedProductsIds(state);
	let orderedProducts = selectOrderedProducts(state);
	let prices = selectProductPrices(state);
	let totalPrice = selectBusketPrice(state);
	return {orderedProductsIds: orderedProductsIds, products: orderedProducts, totalPrice: totalPrice};
}

const shop = combineReducers({
	busket: busket,
	products: products
});

export default shop;