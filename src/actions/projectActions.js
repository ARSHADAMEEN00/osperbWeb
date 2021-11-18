import axios from '../axios';

import {
    
    NEW_PROJECT_REQUEST,
    NEW_PROJECT_SUCCESS,
    NEW_PROJECT_FAIL,

    ALL_PROJECTS_REQUEST,
    ALL_PROJECTS_SUCCESS,
    ALL_PROJECTS_FAIL,

    ADMIN_PROJECTS_REQUEST,
    ADMIN_PROJECTS_SUCCESS,
    ADMIN_PROJECTS_FAIL,

    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAIL,

    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAIL,

    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,

    CLEAR_ERRORS

} from '../constants/projectConstants'

//new complaint
export const newProject = (projectData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_PROJECT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/project/new`, projectData, config)

        dispatch({
            type: NEW_PROJECT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_PROJECT_FAIL,
            payload: error.response.data.message
        })
    }
}

// //get blogs
export const getProjects = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_PROJECTS_REQUEST })

        const { data } = await axios.get('/api/v1/projects')

        dispatch({
            type: ALL_PROJECTS_SUCCESS,
            payload: data
        })
        

    } catch (error) {
        dispatch({
            type: ALL_PROJECTS_FAIL,
            payload: error.response.data.message
        })
    }
}

//get all projects ADMIN
export const getAdminProjects = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_PROJECTS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/projects`)

        dispatch({
            type: ADMIN_PROJECTS_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: ADMIN_PROJECTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// //delete project (ADMIN)
export const deleteProject = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_PROJECT_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/project/${id}`)

        dispatch({
            type: DELETE_PROJECT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_PROJECT_FAIL,
            payload: error.response.data.message
        })
    }
}

// // Update complaint (ADMIN)
export const updateProject = (id, projectData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PROJECT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/project/${id}`, projectData, config)

        dispatch({
            type: UPDATE_PROJECT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PROJECT_FAIL,
            payload: error.response.data.message
        })
    }
}

//get single project details (ADMIN)
export const getProjectDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: PROJECT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/project/${id}`)

        dispatch({
            type: PROJECT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROJECT_DETAILS_FAIL,
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