import React, { Fragment, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

//Backend Imports
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../../../layout/MetaData'
import Loader from '../../../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminBlogs, deleteBlog, clearErrors } from '../../../../actions/blogActions'
import { DELETE_BLOG_RESET } from '../../../../constants/blogConstants'
import { FaTrash } from 'react-icons/fa';

//inport moment for date
import moment from 'moment'

const DbBlogs = ({ history }) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, blogs } = useSelector(state => state.blogs);
  const { error: deleteError, isDeleted } = useSelector(state => state.blog)
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
        
    dispatch(getAdminBlogs());

    if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

    if (deleteError) {
        alert.error(deleteError);
        dispatch(clearErrors())
    }

    if (isDeleted) {
        alert.success('Blog deleted successfully');
        history.push('/admin/blogs');
        dispatch({ type: DELETE_BLOG_RESET })
    }

  }, [dispatch, alert, error, history, deleteError, isDeleted])  //

  const setBlogs = () => {
    const data = {
        columns: [
            {
              label: 'Date',
              field: 'date',
              sort: 'asc'
            },
            {
                label: 'Title',
                field: 'title',
                sort: 'asc'
            },
            {
                label: 'Sub Title',
                field: 'subTitle',
                sort: 'asc'
            },
            {
                label: 'Actions',
                field: 'actions',
            },
        ],
        rows: []
    }

    blogs.forEach(blog => {
        data.rows.push({
            title: blog.title,
            subTitle: blog.subTitle,
            content: blog.content,
            date: moment( blog && blog.date).format('DD-MM-YYYY  LT'),
            isFeatured: blog.isFeatured,
            actions: <Fragment>
                <Link to={`/admin/blog/${blog._id}`} className="btn py-1 px-2">
                    <i className="fa fa-pencil"></i>
                </Link>
                <button className="btn  py-1 px-2 ml-2 flex" onClick={() => deleteBlogHandler(blog._id)}>
                    <FaTrash className="fa-trash"/>
                </button>
            </Fragment>
        })
    })

    return data;
  }

  const deleteBlogHandler = (id) => {
      dispatch(deleteBlog(id))
  }

  return (

    <Fragment>
      <MetaData title={'All Blogs'} />

      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar blogs allBlg/>
        </div>
        <div className="db__home_left">
        <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>All Blogs</h1>

            <div className="db__table">

              {loading ? <Loader /> : (
                <MDBDataTable
                responsive

                exportToCSV
                  data={setBlogs()}
                  className="px-3"
                  bordered
                  // striped
                  hover
                  
                />
              )}

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbBlogs;
