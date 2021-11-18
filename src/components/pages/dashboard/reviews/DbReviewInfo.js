import React, { Fragment, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

// Backend Imports
import MetaData from '../../../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewDetails } from '../../../../actions/reviewActions'

// Date formatting
import moment from 'moment'

const DbReviewInfo = ({ match }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { review } = useSelector(state => state.reviewDetails)

    const reviewId = match.params.id;

    const reviewDate = moment( review && review.createdAt).format('DD-MM-YYYY  LT');

    useEffect(() => {


        if (review && review._id !== reviewId) {
            dispatch(getReviewDetails(reviewId))
        } 


    }, [dispatch, alert, reviewId, review])

  return (
    <Fragment>
      <MetaData title={`Review Info`} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar userReview />
        </div>
        <div className="db__home_left">
          <DbHeader />
          <div className="db__reviews db__orders">
            <h1>Review Info</h1>
            <div className="db__table db__user_edit">
                <div className="input__wrap flex">
                <label htmlFor="name_field">Name</label>
                  <p>{review.name}</p>
                </div>
                <div className="input__wrap flex">
                  <label htmlFor="email_field">Email</label>
                  <p>{review.email}</p>
                </div>
                <div className="input__wrap flex">
                  <label htmlFor="email_field">Date</label>
                  <p>{reviewDate}</p>
                </div>
                <div className="input__wrap flex reviewMessageText">
                  <label htmlFor="message_field">Message</label>
                  <p>{review.message}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbReviewInfo;
