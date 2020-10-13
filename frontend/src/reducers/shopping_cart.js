import {GET_CART, GET_CART_TOTAL, DELETE_ITEM, UPDATE_ITEM, DELETE_CART} from "../actions/types.js"

const initialState = {
    shopping_cart: [],
    shopping_cart_total: 0,
}

function sum(cart){
    let i;
    let add = 0;
    for (i=0; i < cart.length; i++){
        add += cart[i].price;
    }
    return add.toFixed(2);
};

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
                shopping_cart_total: sum(state.shopping_cart.filter(item => item.item_id !== action.payload))
            }
        case UPDATE_ITEM:
            return {
                ...state,
                shopping_cart_total: action.payload.toFixed(2),
            }
        case DELETE_CART:
            return {
                ...state,
                shopping_cart: [],
                shopping_cart_total: 0,
            }
        default:
            return state;
    }
}