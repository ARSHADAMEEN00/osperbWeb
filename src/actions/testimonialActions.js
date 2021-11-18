import axios from '../axios';

import {
    ALL_TESTIMONIALS_REQUEST,
    ALL_TESTIMONIALS_SUCCESS,
    ALL_TESTIMONIALS_FAIL,
    ADMIN_TESTIMONIALS_REQUEST,
    ADMIN_TESTIMONIALS_SUCCESS,
    ADMIN_TESTIMONIALS_FAIL,
    NEW_TESTIMONIAL_REQUEST,
    NEW_TESTIMONIAL_SUCCESS,
    NEW_TESTIMONIAL_FAIL,
    DELETE_TESTIMONIAL_REQUEST,
    DELETE_TESTIMONIAL_SUCCESS,
    DELETE_TESTIMONIAL_FAIL,
    UPDATE_TESTIMONIAL_REQUEST,
    UPDATE_TESTIMONIAL_SUCCESS,
    UPDATE_TESTIMONIAL_FAIL,
    TESTIMONIAL_DETAILS_REQUEST,
    TESTIMONIAL_DETAILS_SUCCESS,
    TESTIMONIAL_DETAILS_FAIL,
    CLEAR_ERRORS

} from '../constants/testimonialConstants'

export const getTestimonials = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_TESTIMONIALS_REQUEST })

        const { data } = await axios.get('/api/v1/testimonials')


        dispatch({
            type: ALL_TESTIMONIALS_SUCCESS,
            payload: data
            
        })

    } catch (error) {
        dispatch({
            type: ALL_TESTIMONIALS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newTestimonial = (testimonialData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_TESTIMONIAL_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/testimonial/new`, testimonialData, config)

        dispatch({
            type: NEW_TESTIMONIAL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_TESTIMONIAL_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete testimonial (Admin)
export const deleteTestimonial = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_TESTIMONIAL_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/testimonial/${id}`)

        dispatch({
            type: DELETE_TESTIMONIAL_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_TESTIMONIAL_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update testimonial (ADMIN)
export const updateTestimonial = (id, testimonialData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_TESTIMONIAL_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/testimonial/${id}`, testimonialData, config)

        dispatch({
            type: UPDATE_TESTIMONIAL_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_TESTIMONIAL_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getTestimonialDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: TESTIMONIAL_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/testimonial/${id}`)

        dispatch({
            type: TESTIMONIAL_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TESTIMONIAL_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getAdminTestimonials = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_TESTIMONIALS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/testimonials`)

        dispatch({
            type: ADMIN_TESTIMONIALS_SUCCESS,
            payload: data.testimonials
        })

    } catch (error) {

        dispatch({
            type: ADMIN_TESTIMONIALS_FAIL,
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