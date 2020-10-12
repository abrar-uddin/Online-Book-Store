import {GET_CART, GET_CART_TOTAL, DELETE_ITEM, UPDATE_ITEM} from "../actions/types.js"

const initialState = {
    shopping_cart: [],
    shopping_cart_total: 0,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                shopping_cart: action.payload
            }
        case GET_CART_TOTAL:
            return {
                ...state,
                shopping_cart_total: action.payload
            }
        case DELETE_ITEM:
            return {
                ...state,
                shopping_cart: state.shopping_cart.filter(item => item.item_id !== action.payload),
            }
        case UPDATE_ITEM:
            return {
                ...state,
            }
        default:
            return state;
    }
}