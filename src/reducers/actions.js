import Products from '../Products.js';
import {ADD_TO_BUSKET, DELETE_FROM_BUSKET,
 UPDATE_ORDERED_COUNT, RECEIVE_PRODUCTS,
  GET_PRODUCT_BY_ID, GET_PRODUCTS_PAGE} from '../constants/ActionTypes.js';

export function fetchProducts(data = "") {
	return Products;
}

export function addToBusket(itemId, count) {
	return {type: ADD_TO_BUSKET, payload: {id: itemId, count: count}};
}

export function deleteFromBusket(itemId, count) {
	return {type: DELETE_FROM_BUSKET, payload: {id: itemId, count: count}};
}