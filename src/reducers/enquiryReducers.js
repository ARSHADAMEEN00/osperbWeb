import {
    
    NEW_ENQUIRY_REQUEST,
    NEW_ENQUIRY_SUCCESS,
    NEW_ENQUIRY_RESET,
    NEW_ENQUIRY_FAIL,
    
    NEW_ADMIN_ENQUIRY_REQUEST,
    NEW_ADMIN_ENQUIRY_SUCCESS,
    NEW_ADMIN_ENQUIRY_RESET,
    NEW_ADMIN_ENQUIRY_FAIL,

    ADMIN_ENQUIRIES_REQUEST,
    ADMIN_ENQUIRIES_SUCCESS,
    ADMIN_ENQUIRIES_FAIL,

    DELETE_ENQUIRY_REQUEST,
    DELETE_ENQUIRY_SUCCESS,
    DELETE_ENQUIRY_RESET,
    DELETE_ENQUIRY_FAIL,

    UPDATE_ENQUIRY_REQUEST,
    UPDATE_ENQUIRY_SUCCESS,
    UPDATE_ENQUIRY_RESET,
    UPDATE_ENQUIRY_FAIL,

    ENQUIRY_DETAILS_REQUEST,
    ENQUIRY_DETAILS_SUCCESS,
    ENQUIRY_DETAILS_FAIL,

    CLEAR_ERRORS

} from '../constants/enquiryConstants'

export const newEnquiryReducer = (state = { enquiry: {} }, action) => {
    switch (action.type) {

        case NEW_ENQUIRY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_ENQUIRY_SUCCESS:
            return {
                loading: false,
                success: action.payload.success
                // enquiry: action.payload.enquiry
            }

        case NEW_ENQUIRY_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_ENQUIRY_RESET:
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

//new enquiry (ADMIN)
export const newAdminEnquiryReducer = (state = { enquiry: {} }, action) => {
    switch (action.type) {

        case NEW_ADMIN_ENQUIRY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_ADMIN_ENQUIRY_SUCCESS:
            return {
                loading: false,
                success: action.payload.success
                // enquiry: action.payload.enquiry
            }

        case NEW_ADMIN_ENQUIRY_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_ADMIN_ENQUIRY_RESET:
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

//get all enquiry admin
export const enquiriesReducer = (state = { enquiries: [] }, action) => {
    switch (action.type) {
        case ADMIN_ENQUIRIES_REQUEST:
            return {
                loading: true,
                enquiries: []
            }

        case ADMIN_ENQUIRIES_SUCCESS:
            return {
                loading: false,
                enquiries: action.payload
            }

        case ADMIN_ENQUIRIES_FAIL:
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

//for delete and update enquiry
export const enquiryReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_ENQUIRY_REQUEST:
        case UPDATE_ENQUIRY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_ENQUIRY_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_ENQUIRY_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_ENQUIRY_FAIL:
        case UPDATE_ENQUIRY_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_ENQUIRY_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_ENQUIRY_RESET:
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

export const enquiryDetailsReducer = (state = { enquiry: {} }, action) => {
    switch (action.type) {

        case ENQUIRY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ENQUIRY_DETAILS_SUCCESS:
            return {
                loading: false,
                enquiry: action.payload.enquiry
            }

        case ENQUIRY_DETAILS_FAIL:
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