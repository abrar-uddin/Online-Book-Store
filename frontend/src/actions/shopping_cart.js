import axios from 'axios';

import {createMessage, returnErrors} from './messages';
import {GET_CART, GET_CART_TOTAL, DELETE_ITEM, UPDATE_ITEM, DELETE_CART, ADD_ITEM, ADD_SAVE_ITEM, DELETE_SAVE_ITEM, GET_SAVED_ITEMS} from "./types";

const SHOPPING_CART_ENDPOINT = "/api/shopping_cart"
const ITEM_ENDPOINT = "/api/item"

const SAVED_ITEM_LIST_ENDPOINT = "/api/saved_items_list"
const SAVED_ITEM_ENDPOINT = "/api/saved_item"

// GET Cart
export const getCart = () => dispatch => {
    axios.get(SHOPPING_CART_ENDPOINT)
        .then(res => {
            axios.get(SHOPPING_CART_ENDPOINT.concat("/", res.data[0]["id"], "/get_cart"))
                .then(res2 => {
                    dispatch({
                        type: GET_CART,
                        payload: res2.data
                    });
                })

        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// GET Cart Total
export const getCartTotal = () => dispatch => {
    axios.get(SHOPPING_CART_ENDPOINT)
        .then(res => {
            axios.get(SHOPPING_CART_ENDPOINT.concat("/", res.data[0]["id"], "/get_cart_total"))
                .then(res2 => {
                    dispatch({
                        type: GET_CART_TOTAL,
                        payload: res2.data
                    });
                })

        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// UPDATE Item
export const updateItem = (id, quantity, book_id, user, price) => dispatch => {
    axios.put(`${ITEM_ENDPOINT}/${id}/`, {
        "quantity": quantity,
        "book": book_id,
        "user": user
    })
        .then(res => {
            dispatch({
                type: UPDATE_ITEM,
                payload: price * quantity
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE Item
export const deleteItem = (id) => dispatch => {
    axios.delete(`${ITEM_ENDPOINT}/${id}/`)
        .then(res => {
            dispatch(createMessage({deleteLead: 'Item Deleted'}));
            dispatch({
                type: DELETE_ITEM,
                payload: id
            });
        }).catch(err => console.log(err));
};

// DELETE Cart
export const deleteCart = () => dispatch => {
    axios.get(SHOPPING_CART_ENDPOINT)
        .then(res => {
            axios.delete(SHOPPING_CART_ENDPOINT.concat("/", res.data[0]["id"], '/'))
                .then(res2 => {
                    dispatch({
                        type: DELETE_CART,
                        payload: res2.data
                    });
                }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// TODO: Needs testing with Eric and Jesus
// ADD Item to cart
export const addItem = (id, quantity, book_id, user, price) => dispatch => {
    axios.post(`${ITEM_ENDPOINT}/`, {
        "quantity": quantity,
        "book": book_id,
        "user": user
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
        // .then(res => {
        //     dispatch({
        //         type: UPDATE_ITEM,
        //         payload: price * quantity
        //     });
        // }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};


// TODO: Needs testing with Eric and Jesus
// ADD Item to saved for later list
export const addSavedItem = (id, quantity, book_id, user, price) => dispatch => {
    axios.post(`${SAVED_ITEM_ENDPOINT}/`, {
        "quantity": quantity,
        "book": book_id,
        "user": user
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
        // .then(res => {
        //     dispatch({
        //         type: ADD_SAVE_ITEM,
        //         payload: price * quantity
        //     });
        // }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE Saved Item
export const deleteSavedItem = (id) => dispatch => {
    axios.delete(`${SAVED_ITEM_ENDPOINT}/${id}/`)
        .then(res => {
            dispatch(createMessage({deleteLead: 'Saved Item Deleted'}));
            dispatch({
                type: DELETE_SAVE_ITEM,
                payload: id
            });
        }).catch(err => console.log(err));
};


// GET Saved items
export const getSavedItems = () => dispatch => {
    axios.get(SAVED_ITEM_LIST_ENDPOINT)
        .then(res => {
            axios.get(SAVED_ITEM_LIST_ENDPOINT.concat("/", res.data[0]["id"], "/get_cart"))
                .then(res2 => {
                    dispatch({
                        type: GET_SAVED_ITEMS,
                        payload: res2.data
                    });
                })

        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};