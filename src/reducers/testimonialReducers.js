import {
    ALL_TESTIMONIALS_REQUEST,
    ALL_TESTIMONIALS_SUCCESS,
    ALL_TESTIMONIALS_FAIL,
    ADMIN_TESTIMONIALS_REQUEST,
    ADMIN_TESTIMONIALS_SUCCESS,
    ADMIN_TESTIMONIALS_FAIL,
    NEW_TESTIMONIAL_REQUEST,
    NEW_TESTIMONIAL_SUCCESS,
    NEW_TESTIMONIAL_RESET,
    NEW_TESTIMONIAL_FAIL,
    DELETE_TESTIMONIAL_REQUEST,
    DELETE_TESTIMONIAL_SUCCESS,
    DELETE_TESTIMONIAL_RESET,
    DELETE_TESTIMONIAL_FAIL,
    UPDATE_TESTIMONIAL_REQUEST,
    UPDATE_TESTIMONIAL_SUCCESS,
    UPDATE_TESTIMONIAL_RESET,
    UPDATE_TESTIMONIAL_FAIL,
    TESTIMONIAL_DETAILS_REQUEST,
    TESTIMONIAL_DETAILS_SUCCESS,
    TESTIMONIAL_DETAILS_FAIL,
    CLEAR_ERRORS

} from '../constants/testimonialConstants'

export const testimonialsReducer = (state = { testimonials: [] }, action) => {
    switch (action.type) {
        case ALL_TESTIMONIALS_REQUEST:
        case ADMIN_TESTIMONIALS_REQUEST:
            return {
                loading: true,
                testimonials: []
            }

        case ALL_TESTIMONIALS_SUCCESS:
            return {
                loading: false,
                testimonials: action.payload.testimonials,
                testimonialsCount: action.payload.testimonialsCount
            }

        case ADMIN_TESTIMONIALS_SUCCESS:
            return {
                loading: false,
                testimonials: action.payload
            }

        case ALL_TESTIMONIALS_FAIL:
        case ADMIN_TESTIMONIALS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const newTestimonialReducer = (state = { testimonial: {} }, action) => {
    switch (action.type) {

        case NEW_TESTIMONIAL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_TESTIMONIAL_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                testimonial: action.payload.testimonial
            }

        case NEW_TESTIMONIAL_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_TESTIMONIAL_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const testimonialReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_TESTIMONIAL_REQUEST:
        case UPDATE_TESTIMONIAL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_TESTIMONIAL_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_TESTIMONIAL_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_TESTIMONIAL_FAIL:
        case UPDATE_TESTIMONIAL_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_TESTIMONIAL_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_TESTIMONIAL_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const testimonialDetailsReducer = (state = { testimonial: {} }, action) => {
    switch (action.type) {

        case TESTIMONIAL_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case TESTIMONIAL_DETAILS_SUCCESS:
            return {
                loading: false,
                testimonial: action.payload.testimonial
            }

        case TESTIMONIAL_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}