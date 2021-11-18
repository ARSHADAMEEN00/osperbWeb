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
import { getAdminReviews, deleteReview, clearErrors } from '../../../../actions/reviewActions'
import { DELETE_REVIEW_RESET } from '../../../../constants/reviewConstants'

// Date formatting
import moment from 'moment'

const DbReviews = ({ history }) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, reviews } = useSelector(state => state.reviews);
  const { error: deleteError, isDeleted } = useSelector(state => state.review)
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
        
    dispatch(getAdminReviews());
    
    if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

    if (deleteError) {
        alert.error(deleteError);
        dispatch(clearErrors())
    }

    if (isDeleted) {
        alert.success('Review deleted successfully');
        history.push('/admin/reviews');
        dispatch({ type: DELETE_REVIEW_RESET })
    }

  }, [dispatch, alert, error, deleteError, isDeleted, history])

  const setReviews = () => {
    const data = {
        columns: [
            {
              label: 'Name',
              field: 'col2',
              sort: 'asc'
            },
            {
              label: 'Email',
              field: 'col3',
              sort: 'asc'
            },
            {
              label: 'Date',
              field: 'col4',
              sort: 'asc'
            },
            {
              label: 'Actions',
              field: 'col5',
            },
        ],
        rows: []
    }

    reviews.forEach(review => {
      
        data.rows.push({
            col1: review._id,
            col2: review.name,
            col3: review.email,
            col4: moment( review && review.createdAt).format('DD-MM-YYYY  LT'),
            col5: <Fragment>
                <Link to={`/admin/review/${review._id}`} className="btn py-1 px-2">
                    <i className="fa fa-eye"></i>
                </Link>
                <button className="btn flex py-1 px-2 ml-2" onClick={() => deleteReviewHandler(review._id)}>
                    <i className="fa fa-trash"></i>
                </button>
              </Fragment>
        })
    })

    return data;
  }

  const deleteReviewHandler = (id) => {
      dispatch(deleteReview(id))
  }

  return (

    <Fragment>
      <MetaData title={'All Reviews'} />

      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar userReview/>
        </div>
        <div className="db__home_left">
        <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>All Reviews</h1>

            <div className="db__table">

              {loading ? <Loader /> : (
                <MDBDataTable
                responsive

                  data={setReviews()}
                  className="px-3"
                  bordered
                  // striped
                  // hover
                />
              )}

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbReviews;
