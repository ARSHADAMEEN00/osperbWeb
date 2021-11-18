import {
    NEW_SETTINGS_REQUEST,
    NEW_SETTINGS_SUCCESS,
    NEW_SETTINGS_RESET,
    NEW_SETTINGS_FAIL,
    LOAD_SETTINGS_REQUEST,
    LOAD_SETTINGS_SUCCESS,
    LOAD_SETTINGS_FAIL,
    UPDATE_SETTINGS_REQUEST,
    UPDATE_SETTINGS_SUCCESS,
    UPDATE_SETTINGS_RESET,
    UPDATE_SETTINGS_FAIL,
    CLEAR_ERRORS
} from '../constants/settingsConstants'

export const createSettingsReducer = (state = { settings: {} }, action) => {
    switch (action.type) {

        case NEW_SETTINGS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_SETTINGS_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                settings: action.payload.settings
            }

        case NEW_SETTINGS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_SETTINGS_RESET:
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

export const settingsReducer = (state = { settings: {} }, action) => {
    switch (action.type) {

        case LOAD_SETTINGS_REQUEST:
            return {
                loading: true
            }

        case LOAD_SETTINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                settings: action.payload.settings,
                settingsCount: action.payload.settingsCount,
                shipping: action.payload.shipping,
            }

        case LOAD_SETTINGS_FAIL:
            return {
                loading: false,
                settings: null,
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

export const updateSettingsReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_SETTINGS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_SETTINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case UPDATE_SETTINGS_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case UPDATE_SETTINGS_FAIL:
            return {
                ...state,
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