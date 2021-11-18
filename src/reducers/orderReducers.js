import {
    CREATE_COD_ORDER_REQUEST,
    CREATE_COD_ORDER_SUCCESS,
    CREATE_COD_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_RESET,
    UPDATE_ORDER_FAIL,
    CANCELL_ORDER_REQUEST,
    CANCELL_ORDER_SUCCESS,
    CANCELL_ORDER_RESET,
    CANCELL_ORDER_FAIL,
    RETURN_ORDER_REQUEST,
    RETURN_ORDER_SUCCESS,
    RETURN_ORDER_RESET,
    RETURN_ORDER_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_RESET,
    DELETE_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants'

export const newOrderReducer = (state = {}, action) => {
    switch (action.type) {

        case CREATE_COD_ORDER_REQUEST:
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_COD_ORDER_SUCCESS:
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case CREATE_COD_ORDER_FAIL:
        case CREATE_ORDER_FAIL:
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

export const myOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {

        case MY_ORDERS_REQUEST:
            return {
                loading: true
            }

        case MY_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }

        case MY_ORDERS_FAIL:
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

export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {

        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload.order
            }

        case ORDER_DETAILS_FAIL:
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
            return state;
    }
}

export const allOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {

        case ALL_ORDERS_REQUEST:
            return {
                loading: true
            }

        case ALL_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload.orders,
                starredOrders: action.payload.starredOrders,
                cancelledOrders: action.payload.cancelledOrders,
                returnedOrders: action.payload.returnedOrders,
                totalAmount: action.payload.totalAmount,
                newOrders: action.payload.newOrders,

            }

        case ALL_ORDERS_FAIL:
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

export const orderReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_ORDER_REQUEST:
        case CANCELL_ORDER_REQUEST:
        case RETURN_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        
        case CANCELL_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isCancelled: action.payload
            }
        
        case RETURN_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isReturned: action.payload
            }

        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_ORDER_FAIL:
        case CANCELL_ORDER_FAIL:
        case RETURN_ORDER_FAIL:
        case DELETE_ORDER_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_ORDER_RESET:
            return {
                ...state,
                isUpdated: false
            }
        
        case CANCELL_ORDER_RESET:
            return {
                ...state,
                isCancelled: false
            }

        case RETURN_ORDER_RESET:
            return {
                ...state,
                isReturned: false
            }

        case DELETE_ORDER_RESET:
            return {
                ...state,
                isDeleted: false
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