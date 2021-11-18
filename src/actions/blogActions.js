import axios from '../axios';

import {
    
    NEW_BLOG_REQUEST,
    NEW_BLOG_SUCCESS,
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
    UPDATE_BLOG_FAIL,

    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,
    
    CLEAR_ERRORS

} from '../constants/blogConstants'

//new blog
export const newBlog = (blogData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_BLOG_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/blog/new`, blogData, config)

        dispatch({
            type: NEW_BLOG_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_BLOG_FAIL,
            payload: error.response.data.message
        })
    }
}

//get all blogs (ADMIN)
export const getAdminBlogs = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_BLOGS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/blogs`)

        dispatch({
            type: ADMIN_BLOGS_SUCCESS,
            payload: data.blogs
        })

    } catch (error) {

        dispatch({
            type: ADMIN_BLOGS_FAIL,
            payload: error.response.data.message
        })
    }
}

//get blogs
export const getBlogs = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_BLOGS_REQUEST })

        const { data } = await axios.get('/api/v1/blogs')

        dispatch({
            type: ALL_BLOGS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_BLOGS_FAIL,
            // payload: error.response.data.message
        })
    }
}

//blog details
export const getBlogDetails = (subtitle) => async (dispatch) => {
    try {

        dispatch({ type: BLOG_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/blog/${subtitle}`)

        dispatch({
            type: BLOG_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//blog details
export const getAdminBlogDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_BLOG_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/blog/${id}`)

        dispatch({
            type: ADMIN_BLOG_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_BLOG_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//delete blog
export const deleteBlog = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_BLOG_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/blog/${id}`)

        dispatch({
            type: DELETE_BLOG_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_BLOG_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Blog (ADMIN)
export const updateBlog = (id, blogData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_BLOG_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/blog/${id}`, blogData, config)

        dispatch({
            type: UPDATE_BLOG_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_BLOG_FAIL,
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