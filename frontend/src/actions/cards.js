import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_CARDS, DELETE_CARDS, ADD_CARDS } from './types';

// Gets the cards.
export const getCards = () => (dispatch, getState) => {
    axios.get('/api/cards/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_CARDS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Deletes

export const deleteCards = id => (dispatch, getState) => {
    axios.delete(`/api/cards/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ cardDeleted : "Card deleted."}))
        dispatch({
            type: DELETE_CARDS,
            payload: id
        });
    }).catch(err => console.log(err));
}

//Adds
export const addCards = cards => (dispatch, getState) => {
    axios.post("/api/cards/", cards, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ cardCreated : "Card created."}))
        dispatch({
            type: ADD_CARDS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}; 