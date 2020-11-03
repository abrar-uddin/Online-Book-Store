import axios from 'axios';

import { GET_BOOKS } from './types';
import { GET_BOOKS_CATEGORY } from './types';
import { GET_BOOKS_TITLE } from './types';
import { GET_BOOKS_AUTHOR } from './types';
import { GET_BOOKS_PRICE } from './types';
import { GET_BOOKS_STARS } from './types';
import { GET_BOOKS_TOPSELLERS } from './types';

// GET BOOKS
export const getBooks = () => dispatch => {
    axios.get('/api/book/')
        .then(res=> {
            dispatch({
                type: GET_BOOKS,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

// GET BOOKS BY CATEGORY
export const getBooksCategory = (category) => dispatch => {
    axios.get(`/api/book/?category=${category}`)
        .then(res=> {
            dispatch({
                type: GET_BOOKS_CATEGORY,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

// GET BOOKS BY TOP SELLERS
export const getBooksTopSellers = (stars) => dispatch => {
    axios.get(`/api/book/?stars=${stars}`)
        .then(res=> {
            dispatch({
                type: GET_BOOKS_TOPSELLERS,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

// GET BOOKS BY TITLE
export const getBooksTitle = () => dispatch => {
    axios.get(`/api/book/?ordering=name`)
        .then(res=> {
            dispatch({
                type: GET_BOOKS_TITLE,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

// GET BOOKS BY AUTHOR
export const getBooksAuthor = () => dispatch => {
    axios.get(`/api/book/?ordering=author`)
        .then(res=> {
            dispatch({
                type: GET_BOOKS_AUTHOR,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

// GET BOOKS BY PRICE
export const getBooksPrice = () => dispatch => {
    axios.get(`/api/book/?ordering=price`)
        .then(res=> {
            dispatch({
                type: GET_BOOKS_PRICE,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

// GET BOOKS BY STARS
export const getBooksStars = () => dispatch => {
    axios.get(`/api/book/?ordering=stars`)
        .then(res=> {
            dispatch({
                type: GET_BOOKS_STARS,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

