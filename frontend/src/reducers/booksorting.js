import {
    GET_BOOKS,
    GET_BOOKS_CATEGORY,
    GET_BOOKS_TITLE,
    GET_BOOKS_AUTHOR,
    GET_BOOKS_PRICE,
    GET_BOOKS_STARS,
    GET_BOOKS_TOPSELLERS,
    GET_BOOKS_RELEASE
} from '../actions/types.js';

const initialState = {
    booksorting: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                booksorting: action.payload
            }
        case GET_BOOKS_CATEGORY:
            return {
                ...state,
                booksorting: action.payload
            }
        case GET_BOOKS_TITLE:
            return {
                ...state,
                booksorting: action.payload
            }
        case GET_BOOKS_AUTHOR:
            return {
                ...state,
                booksorting: action.payload
            }
        case GET_BOOKS_PRICE:
            return {
                ...state,
                booksorting: action.payload
            }
        case GET_BOOKS_STARS:
            return {
                ...state,
                booksorting: action.payload
            }
        case GET_BOOKS_TOPSELLERS:
            return {
                ...state,
                booksorting: action.payload
            }
        case GET_BOOKS_RELEASE:
            return {
                ...state,
                booksorting: action.payload
            }
        default:
            return state;
    }
}
