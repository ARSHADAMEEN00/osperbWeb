import axios from '../axios';

import {
    
    NEW_ENQUIRY_REQUEST,
    NEW_ENQUIRY_SUCCESS,
    NEW_ENQUIRY_FAIL,

    ADMIN_ENQUIRIES_REQUEST,
    ADMIN_ENQUIRIES_SUCCESS,
    ADMIN_ENQUIRIES_FAIL,

    DELETE_ENQUIRY_REQUEST,
    DELETE_ENQUIRY_SUCCESS,
    DELETE_ENQUIRY_FAIL,

    UPDATE_ENQUIRY_REQUEST,
    UPDATE_ENQUIRY_SUCCESS,
    UPDATE_ENQUIRY_FAIL,

    ENQUIRY_DETAILS_REQUEST,
    ENQUIRY_DETAILS_SUCCESS,
    ENQUIRY_DETAILS_FAIL,

    CLEAR_ERRORS

} from '../constants/enquiryConstants'

//new enquiry
export const newEnquiry = (enquiryData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_ENQUIRY_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/enquiry/new`, enquiryData, config)

        dispatch({
            type: NEW_ENQUIRY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_ENQUIRY_FAIL,
            payload: error.response.data.message
        })
    }
}

//get all enquiries ADMIN
export const getAdminEnquiries = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_ENQUIRIES_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/enquiries`)

        dispatch({
            type: ADMIN_ENQUIRIES_SUCCESS,
            payload: data.enquiries
        })

    } catch (error) {

        dispatch({
            type: ADMIN_ENQUIRIES_FAIL,
            payload: error.response.data.message
        })
    }
}

//delete enquiry (ADMIN)
export const deleteEnquiry = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_ENQUIRY_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/enquiry/${id}`)

        dispatch({
            type: DELETE_ENQUIRY_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_ENQUIRY_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update enquiry (ADMIN)
export const updateEnquiry = (id, enquiryData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_ENQUIRY_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/enquiry/${id}`, enquiryData, config)

        dispatch({
            type: UPDATE_ENQUIRY_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_ENQUIRY_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getEnquiryDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: ENQUIRY_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/enquiry/${id}`)

        dispatch({
            type: ENQUIRY_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ENQUIRY_DETAILS_FAIL,
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