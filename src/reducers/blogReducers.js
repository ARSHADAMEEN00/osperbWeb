import {
    
    NEW_BLOG_REQUEST,
    NEW_BLOG_SUCCESS,
    NEW_BLOG_RESET,
    NEW_BLOG_FAIL,

    ADMIN_BLOGS_REQUEST,
    ADMIN_BLOGS_SUCCESS,
    ADMIN_BLOGS_FAIL,

    ALL_BLOGS_REQUEST,
    ALL_BLOGS_SUCCESS,
    ALL_BLOGS_FAIL,

    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,

    ADMIN_BLOG_DETAILS_REQUEST,
    ADMIN_BLOG_DETAILS_SUCCESS,
    ADMIN_BLOG_DETAILS_FAIL,

    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_RESET,
    UPDATE_BLOG_FAIL,

    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_RESET,
    DELETE_BLOG_FAIL,

    CLEAR_ERRORS

} from '../constants/blogConstants'

//new blog (ADMIN)
export const newBlogReducer = (state = { blog: {} }, action) => {
    switch (action.type) {

        case NEW_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_BLOG_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                // blog: action.payload.blog
            }

        case NEW_BLOG_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_BLOG_RESET:
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

//get all blogs
export const blogsReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case ALL_BLOGS_REQUEST:
        case ADMIN_BLOGS_REQUEST:
            return {
                loading: true,
                blogs: []
            }

        case ALL_BLOGS_SUCCESS:
            return {
                loading: false,
                blogs: action.payload.blogs,
                blogsCount: action.payload.blogsCount,
                featuredBlogs: action.payload.featuredBlogs,
                
            }

        case ADMIN_BLOGS_SUCCESS:
            return {
                loading: false,
                blogs: action.payload
            }

        case ALL_BLOGS_FAIL:
        case ADMIN_BLOGS_FAIL:
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

//blog details
export const blogDetailsReducer = (state = { blog: {} }, action) => {
    switch (action.type) {

        case BLOG_DETAILS_REQUEST:
        case ADMIN_BLOG_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case BLOG_DETAILS_SUCCESS:
        case ADMIN_BLOG_DETAILS_SUCCESS:
            return {
                loading: false,
                blog: action.payload.blog
            }

        case BLOG_DETAILS_FAIL:
        case ADMIN_BLOG_DETAILS_FAIL:
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

//delete and update blog
export const blogReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_BLOG_REQUEST:
        case UPDATE_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_BLOG_FAIL:
        case UPDATE_BLOG_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_BLOG_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_BLOG_RESET:
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