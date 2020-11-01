import axios from 'axios';

import { GET_BOOKS } from './types';
import { GET_BOOKS_CATEGORY } from './types';

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
    axios.get('/api/book/')
        .then(res=> {
            dispatch({
                type: GET_BOOKS_CATEGORY,
                payload: res.data
            })
        }).catch(err => console.log(err));
}
