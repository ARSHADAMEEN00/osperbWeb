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
import { getAdminEnquiries, deleteEnquiry, clearErrors } from '../../../../actions/enquiryActions'
import { DELETE_ENQUIRY_RESET } from '../../../../constants/enquiryConstants'
import { FaTrash } from 'react-icons/fa';

 

const DbConvertedEnquiries = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, enquiries } = useSelector(state => state.enquiries);
    const { error: deleteError, isDeleted } = useSelector(state => state.enquiry);

    const { user } = useSelector(state => state.auth)

    
    useEffect(() => {
        
        dispatch(getAdminEnquiries());
    
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    
        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }
    
        if (isDeleted) {
            alert.success('Enquiry deleted successfully');
            history.push('/admin/enquiries');
            dispatch({ type: DELETE_ENQUIRY_RESET })
        }
    
    }, [dispatch, alert, error, deleteError, isDeleted, history])

 

    const setEnquiries = () => {
        const data = {
            columns: [
                
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Place',
                    field: 'place',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'PhoneNo',
                    field: 'phoneNo',
                    sort: 'asc'
                },
       
                {
                  label: 'Status',
                  field: 'enquiryStatus',
                  sort: 'asc'
                },
                
       
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }
      
        enquiries.forEach(enquiry => {
            
            if(enquiry.enquiryStatus === "Converted"){      
                data.rows.push({
                    name: enquiry.name,
                    email: enquiry.email,
                    place: enquiry.place,
                    phoneNo: enquiry.phoneNo,
                    note: enquiry.note,
                    // product: enquiry.product.name,
                    enquiryStatus: 
                    
                    enquiry.enquiryStatus && String(enquiry.enquiryStatus).includes('Converted')
                    ? <p style={{ color: 'Green' }}>{enquiry.enquiryStatus}</p>
                    : <p style={{ color: 'Green' }}>{enquiry.enquiryStatus}</p>,
                    
                    actions: <Fragment>
                        <Link to={`/admin/enquiry/${enquiry._id}`} className="btn py-1 px-2">
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button className="btn flex py-1 px-2 ml-2" onClick={() => deleteEnquiryHandler(enquiry._id)}>  
                            <FaTrash className="fa-trash"/>
                        </button>
                    </Fragment>
                })
            }


        })
    
        return data;
    }

    const deleteEnquiryHandler = (id) => {
      dispatch(deleteEnquiry(id))
    }

    return (
      <Fragment>
      <MetaData title={'All Enquiries'} />

      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar enquiries covertEnquirie/>
        </div>
        <div className="db__home_left">
        <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Converted Enquiries</h1>

            <div className="db__table">

              {loading ? <Loader /> : (
                <MDBDataTable
                responsive

                exportToCSV
                  data={setEnquiries()}
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
    )
}

export default DbConvertedEnquiries
