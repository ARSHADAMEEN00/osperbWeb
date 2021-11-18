import axios from '../axios';

import {

    ADMIN_REVIEWS_REQUEST,
    ADMIN_REVIEWS_SUCCESS,
    ADMIN_REVIEWS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    REVIEW_DETAILS_REQUEST,
    REVIEW_DETAILS_SUCCESS,
    REVIEW_DETAILS_FAIL,
    
    CLEAR_ERRORS,
    

} from '../constants/reviewConstants'

// Get all reviews (ADMIN)
export const getAdminReviews = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_REVIEWS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/reviews`)

        dispatch({
            type: ADMIN_REVIEWS_SUCCESS,
            payload: data.reviews
        })

    } catch (error) {

        dispatch({
            type: ADMIN_REVIEWS_FAIL,
            payload: error.response.data.message
        })
    }
}



//new Review
export const newReview = (reviewData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/review/new`, reviewData, config)

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get Single Review
export const getReviewDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: REVIEW_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/review/${id}`)

        dispatch({
            type: REVIEW_DETAILS_SUCCESS,
            payload: data.review
        })

    } catch (error) {
        dispatch({
            type: REVIEW_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//Delete Review
export const deleteReview = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_REVIEW_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/review/${id}`)

        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_REVIEW_FAIL,
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