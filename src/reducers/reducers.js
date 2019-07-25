import {ADD_TO_BUSKET, DELETE_FROM_BUSKET, REMOVE_FROM_BUSKET,
  GET_PRODUCT_BY_ID, MAKE_ORDER, CLEAR_BUSKET, APPLY_FILTER, CLEAR_FILTER} 
  from '../constants/ActionTypes.js';
import {fetchProducts, fetchFilters} from './actions.js';
import {combineReducers, createStore} from 'redux';

const osFilter = (product, requiredOs) => requiredOs.includes(product.os);
const sellerNameFilter = (product, requiredSellers) => requiredSellers.includes(product.sellerName);
const priceFilter = (product, priceGap) => {
	let price = priceGap[0].split("-").map((price) => parseInt(price));
	return product.price > price[0] && product.price < price[1];
}

const initialState = {
	orderedProducts: {},
	products: {},
	filteredProducts: {},
	filters: {
		userFilter: {},
		filterTokens: {},
		filterHandlers: {
			"os": osFilter,
			"sellerName": sellerNameFilter,
			"price": priceFilter
		}
	}
}

const productsPerPage = 5;
const pagingLimit = 4;
const range = (start, stop, step) => 
	Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

initialState.products = fetchProducts();
initialState.filters.filterTokens = fetchFilters();

const products = (state = initialState, action) => {
	let newState;
	switch(action.type) {
	case GET_PRODUCT_BY_ID:
		return state.find((product) => product.id === action.id);
	case APPLY_FILTER:
		newState = Object.assign({}, state);
		newState.filters.userFilter = Object.assign({}, action.payload.filter);
		Object.keys(newState.products).map((productId) => {
			let product = newState.products[productId];
			let matches = Object.keys(newState.filters.userFilter).map((filterName) => {
				let values = newState.filters.userFilter[filterName];
				let filter = newState.filters.filterHandlers[filterName];
				return filter(product, values);
			});
			if (matches.every(m => m == true)) {
				newState.filteredProducts[productId] = product;
			}
		});
		return newState;
	case CLEAR_FILTER:
		newState = Object.assign({}, state);
		newState.filters.userFilter = {};
		newState.filteredProducts = {};
		return newState;
	default:
		return state;
	}
}

const filters = (state = initialState, action) => {
	let newState;
	switch(action.type) {
		case CLEAR_FILTER:
			newState = Object.assign({}, state);
			newState.userFilter = {};
			newState.filteredProducts = {};
			return newState;
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
	let container = Object.assign({}, state.products.products);
	console.log(state.filters);
	if (state.filters.filters.userFilter != undefined && 
		Object.keys(state.filters.filters.userFilter).length != 0) {
		container = Object.assign(state.products.filteredProducts);
	}
	if (limit > Object.keys(container).length == true)
		limit = Object.keys(container).length;
	return Object.values(container).slice(offset, limit);
}

export function selectPagination(state, page) {
	let offset = page;
	let leftLimit = page - pagingLimit;
	let rightLimit = page + pagingLimit;
	if (leftLimit < 0)
		leftLimit = 0;
	let productPages;
	if (!state.filter.userFilter) 
		productPages = Object.keys(state.products).length / productsPerPage;
	else
		productPages = Object.keys(state.filteredProducts).length / productsPerPage;
	if (rightLimit > productPages)
		rightLimit = productPages;
	let pages = range(leftLimit, rightLimit, 1);
	return pages;
}

export function selectProductPrice(state, id) {
	let orderedProduct = state.busket.orderedProducts[id];
	let item = state.products.products[id];
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

export function selectFilters(state) {
	return state.filters.filters.filterTokens;
}

export function selectUserFilters(state) {
	return state.filters.userFilter;
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
	filters: filters,
	products: products,
	busket: busket
});

export default shop;