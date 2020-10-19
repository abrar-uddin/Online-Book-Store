import axios from 'axios';

import { GET_BOOKS } from './types';

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