import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_PROFILES, DELETE_PROFILES, ADD_PROFILES } from './types';

// Gets the profiles.
export const getProfiles = () => (dispatch, getState) => {
    axios.get('/api/users/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Deletes

export const deleteProfiles = id => (dispatch, getState) => {
    axios.delete(`/api/users/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ profileDeleted : "Profile deleted."}))
        dispatch({
            type: DELETE_PROFILES,
            payload: id
        });
    }).catch(err => console.log(err));
}

//Adds
export const addProfiles = profiles => (dispatch, getState) => {
    axios.post("/api/users/", profiles, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ profileCreated : "Profile created."}))
        dispatch({
            type: ADD_PROFILES,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}; 