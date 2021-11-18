import {
    
    NEW_COMPLAINT_REQUEST,
    NEW_COMPLAINT_SUCCESS,
    NEW_COMPLAINT_RESET,
    NEW_COMPLAINT_FAIL,
    

    ADMIN_COMPLAINTS_REQUEST,
    ADMIN_COMPLAINTS_SUCCESS,
    ADMIN_COMPLAINTS_FAIL,

    DELETE_COMPLAINT_REQUEST,
    DELETE_COMPLAINT_SUCCESS,
    DELETE_COMPLAINT_RESET,
    DELETE_COMPLAINT_FAIL,

    UPDATE_COMPLAINT_REQUEST,
    UPDATE_COMPLAINT_SUCCESS,
    UPDATE_COMPLAINT_RESET,
    UPDATE_COMPLAINT_FAIL,

    COMPLAINT_DETAILS_REQUEST,
    COMPLAINT_DETAILS_SUCCESS,
    COMPLAINT_DETAILS_FAIL,

    CLEAR_ERRORS

} from '../constants/complaintsConstants'

//new complaint
export const newComplaintReducer = (state = { complaint: {} }, action) => {
    switch (action.type) {

        case NEW_COMPLAINT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_COMPLAINT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success
            }

        case NEW_COMPLAINT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_COMPLAINT_RESET:
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

//get all complaints admin
export const complaintsReducer = (state = { complaints: [] }, action) => {
    switch (action.type) {
        case ADMIN_COMPLAINTS_REQUEST:
            return {
                loading: true,
                complaints: []
            }

        case ADMIN_COMPLAINTS_SUCCESS:
            return {
                loading: false,
                complaints: action.payload.complaints
            }

        case ADMIN_COMPLAINTS_FAIL:
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

//for delete and update complaint
export const complaintReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_COMPLAINT_REQUEST:
        case UPDATE_COMPLAINT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_COMPLAINT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_COMPLAINT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_COMPLAINT_FAIL:
        case UPDATE_COMPLAINT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_COMPLAINT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_COMPLAINT_RESET:
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

//get single complaint details
export const complaintDetailsReducer = (state = { complaint: {} }, action) => {
    switch (action.type) {

        case COMPLAINT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case COMPLAINT_DETAILS_SUCCESS:
            return {
                loading: false,
                complaint: action.payload.complaint
            }

        case COMPLAINT_DETAILS_FAIL:
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