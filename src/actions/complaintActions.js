import axios from '../axios';

import {
    
    NEW_COMPLAINT_REQUEST,
    NEW_COMPLAINT_SUCCESS,
    NEW_COMPLAINT_FAIL,

    ADMIN_COMPLAINTS_REQUEST,
    ADMIN_COMPLAINTS_SUCCESS,
    ADMIN_COMPLAINTS_FAIL,

    DELETE_COMPLAINT_REQUEST,
    DELETE_COMPLAINT_SUCCESS,
    DELETE_COMPLAINT_FAIL,

    UPDATE_COMPLAINT_REQUEST,
    UPDATE_COMPLAINT_SUCCESS,
    UPDATE_COMPLAINT_FAIL,

    COMPLAINT_DETAILS_REQUEST,
    COMPLAINT_DETAILS_SUCCESS,
    COMPLAINT_DETAILS_FAIL,

    CLEAR_ERRORS

} from '../constants/complaintsConstants'

//new complaint
export const newComplaint = (complaintData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_COMPLAINT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/complaint/new`, complaintData, config)

        dispatch({
            type: NEW_COMPLAINT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_COMPLAINT_FAIL,
            payload: error.response.data.message
        })
    }
}

//get all complaints ADMIN
export const getAdminComplaints = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_COMPLAINTS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/complaints`)

        dispatch({
            type: ADMIN_COMPLAINTS_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: ADMIN_COMPLAINTS_FAIL,
            payload: error.response.data.message
        })
    }
}

//delete complaint (ADMIN)
export const deleteComplaint = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_COMPLAINT_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/complaint/${id}`)

        dispatch({
            type: DELETE_COMPLAINT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_COMPLAINT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update complaint (ADMIN)
export const updateComplaint = (id, complaintData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_COMPLAINT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/complaint/${id}`, complaintData, config)

        dispatch({
            type: UPDATE_COMPLAINT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_COMPLAINT_FAIL,
            payload: error.response.data.message
        })
    }
}

//get single complaint details (ADMIN)
export const getComplaintDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: COMPLAINT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/complaint/${id}`)

        dispatch({
            type: COMPLAINT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COMPLAINT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}