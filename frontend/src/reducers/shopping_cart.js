import {GET_CART, GET_CART_TOTAL} from "../actions/types.js"

const initialState = {
    shopping_cart: [],
    shopping_cart_total: []
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
        default:
            return state;
    }
}