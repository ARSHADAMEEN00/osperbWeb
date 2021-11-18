import {
    ALL_CATEGORIES_REQUEST,
    ALL_CATEGORIES_SUCCESS,
    ALL_CATEGORIES_FAIL,
    ADMIN_CATEGORIES_REQUEST,
    ADMIN_CATEGORIES_SUCCESS,
    ADMIN_CATEGORIES_FAIL,
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_SUCCESS,
    NEW_CATEGORY_RESET,
    NEW_CATEGORY_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_RESET,
    DELETE_CATEGORY_FAIL,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_RESET,
    UPDATE_CATEGORY_FAIL,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAIL,
    CLEAR_ERRORS

} from '../constants/categoryConstants'

export const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case ALL_CATEGORIES_REQUEST:
        case ADMIN_CATEGORIES_REQUEST:
            return {
                loading: true,      
                categories: []
            }

        case ALL_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: action.payload.categories,
                categoriesCount: action.payload.categoriesCount
            }

        case ADMIN_CATEGORIES_SUCCESS:
            return {   
                loading: false,
                categories: action.payload
            }

        case ALL_CATEGORIES_FAIL:
        case ADMIN_CATEGORIES_FAIL:
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

export const newCategoryReducer = (state = { category: {} }, action) => {
    switch (action.type) {

        case NEW_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_CATEGORY_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                category: action.payload.category
            }

        case NEW_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_CATEGORY_RESET:
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

export const categoryReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_CATEGORY_REQUEST:
        case UPDATE_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_CATEGORY_FAIL:
        case UPDATE_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_CATEGORY_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_CATEGORY_RESET:
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

export const categoryDetailsReducer = (state = { category: {} }, action) => {
    switch (action.type) {

        case CATEGORY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CATEGORY_DETAILS_SUCCESS:
            return {
                loading: false,
                category: action.payload.category,
                categoryProducts: action.payload.categoryProducts
            }

        case CATEGORY_DETAILS_FAIL:
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