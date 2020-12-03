import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_DETAILS, DELETE_DETAILS, ADD_DETAILS } from './types';

// Gets the details.
export const getDetails = () => (dispatch, getState) => {
    axios.get('/api/details/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_DETAILS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Deletes

export const deleteDetails = id => (dispatch, getState) => {
    axios.delete(`/api/details/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ cardDeleted : "Details deleted."}))
        dispatch({
            type: DELETE_DETAILS,
            payload: id
        });
    }).catch(err => console.log(err));
}

//Adds
export const addDetails = details => (dispatch, getState) => {
    axios.post("/api/details/", details, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ cardCreated : "Details created."}))
        dispatch({
            type: ADD_DETAILS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}; 