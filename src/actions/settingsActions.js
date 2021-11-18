import axios from '../axios';
import {
    NEW_SETTINGS_REQUEST,
    NEW_SETTINGS_SUCCESS,
    NEW_SETTINGS_FAIL,
    LOAD_SETTINGS_REQUEST,
    LOAD_SETTINGS_SUCCESS,
    LOAD_SETTINGS_FAIL,
    UPDATE_SETTINGS_REQUEST,
    UPDATE_SETTINGS_SUCCESS,
    UPDATE_SETTINGS_FAIL,
    CLEAR_ERRORS
} from '../constants/settingsConstants'

// Create settings initially
export const createSettings = (settingsData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_SETTINGS_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/settings/create`, settingsData, config)

        dispatch({
            type: NEW_SETTINGS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_SETTINGS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Load app settings
export const loadSettings = () => async (dispatch) => {
    try {

        dispatch({ type: LOAD_SETTINGS_REQUEST })

        const { data } = await axios.get('/api/v1/settings')

        dispatch({
            type: LOAD_SETTINGS_SUCCESS, 
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LOAD_SETTINGS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update app settings
export const updateSettings = (settingsData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_SETTINGS_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const { data } = await axios.put('/api/v1/admin/settings/update', settingsData, config)

        dispatch({
            type: UPDATE_SETTINGS_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_SETTINGS_FAIL,
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