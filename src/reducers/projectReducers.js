import {
    
    NEW_PROJECT_REQUEST,
    NEW_PROJECT_SUCCESS,
    NEW_PROJECT_RESET,
    NEW_PROJECT_FAIL,

    ALL_PROJECTS_REQUEST,
    ALL_PROJECTS_SUCCESS,
    ALL_PROJECTS_FAIL,

    ADMIN_PROJECTS_REQUEST,
    ADMIN_PROJECTS_SUCCESS,
    ADMIN_PROJECTS_FAIL,

    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_RESET,
    DELETE_PROJECT_FAIL,

    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_RESET,
    UPDATE_PROJECT_FAIL,

    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,

    CLEAR_ERRORS

} from '../constants/projectConstants'

//new complaint
export const newProjectReducer = (state = { project: {} }, action) => {
    switch (action.type) {

        case NEW_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_PROJECT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success
            }

        case NEW_PROJECT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_PROJECT_RESET:
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

// //get all projects ADMIN
//get all projects
export const projectsReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
        case ALL_PROJECTS_REQUEST:
        case ADMIN_PROJECTS_REQUEST:
            return {
                loading: true,
                projects: []
            }

        case ALL_PROJECTS_SUCCESS:
            return {
                loading: false,
                projects: action.payload.projects,
                projectsCount: action.payload.projectsCount,
                featuredProjects: action.payload.featuredProjects,
            }

        case ADMIN_PROJECTS_SUCCESS:
            return {
                loading: false,
                projects: action.payload.projects,
            }

        case ALL_PROJECTS_FAIL:
        case ADMIN_PROJECTS_FAIL:
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

//for delete and update project
export const projectReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_PROJECT_REQUEST:
        case UPDATE_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_PROJECT_FAIL:
        case UPDATE_PROJECT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_PROJECT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_PROJECT_RESET:
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

//get single project details
export const projectDetailsReducer = (state = { project: {} }, action) => {
    switch (action.type) {

        case PROJECT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PROJECT_DETAILS_SUCCESS:
            return {
                loading: false,
                project: action.payload.project
            }

        case PROJECT_DETAILS_FAIL:
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