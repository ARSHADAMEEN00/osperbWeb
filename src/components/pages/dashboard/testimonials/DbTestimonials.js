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
import { getAdminTestimonials, deleteTestimonial, clearErrors } from '../../../../actions/testimonialActions'
import { DELETE_TESTIMONIAL_RESET } from '../../../../constants/testimonialConstants'

// Date formatting
import moment from 'moment'

const DbTestimonials = ({ history }) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, testimonials } = useSelector(state => state.testimonials);
  const { error: deleteError, isDeleted } = useSelector(state => state.testimonial)
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
        
    dispatch(getAdminTestimonials());

    if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

    if (deleteError) {
        alert.error(deleteError);
        dispatch(clearErrors())
    }

    if (isDeleted) {
        alert.success('Testimonial deleted successfully');
        history.push('/admin/testimonials');
        dispatch({ type: DELETE_TESTIMONIAL_RESET })
    }

  }, [dispatch, alert, error, deleteError, isDeleted, history])

  const setTestimonials = () => {
    const data = {
        columns: [

            {
                label: 'Name',
                field: 'col2',
                sort: 'asc'
            },
            {
                label: 'Image',
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
                field: 'actions',
            },
        ],
        rows: []
    }

    testimonials.forEach(testimonial => {
        data.rows.push({
            col2: testimonial.name,
            col3: <img 
                    src={testimonial.images 
                      ? `${process.env.REACT_APP_BASE_URL}${testimonial.images[0].url}`
                      : "/images/others/default_product.png" } 
                    alt={testimonial.name} style={{ width:'55px', height:'52px'}}/>,
            col4: moment( testimonial && testimonial.createdAt).format('DD-MM-YYYY  LT'),
            actions: <Fragment>
                <Link to={`/admin/testimonial/${testimonial._id}`} className="btn py-1 px-2">
                    <i className="fa fa-pencil"></i>
                </Link>
                <button className="btn  py-1 px-2 ml-2 flex" onClick={() => deleteTestimonialHandler(testimonial._id)}>
                    <i className="fa fa-trash"></i>
                </button>
            </Fragment>
        })
    })

    return data;
  }

  const deleteTestimonialHandler = (id) => {
      dispatch(deleteTestimonial(id))
  }

  return (

    <Fragment>
      <MetaData title={'All Testimonials'} />

      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar testnomials allTestnomials/>
        </div>
        <div className="db__home_left">
        <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>All Testimonials</h1>

            <div className="db__table">

              {loading ? <Loader /> : (
                <MDBDataTable
                responsive

                  data={setTestimonials()}
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

export default DbTestimonials;
