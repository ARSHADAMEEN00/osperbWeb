import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateEnquiry, getEnquiryDetails, clearErrors } from '../../../../actions/enquiryActions'
import { getProducts } from '../../../../actions/productActions'
import { UPDATE_ENQUIRY_RESET } from '../../../../constants/enquiryConstants'
// import Loader from '../../../layout/Loader';

const DbUpdateEnquiry = ({ match, history }) => {

    // const [product, setProduct] = useState('');
    const [note, setNote] = useState('');
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [enquiryStatus, setEnquiryStatus] = useState('');
    const [product, setProduct] = useState("");

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, enquiry } = useSelector(state => state.enquiryDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.enquiry);
    const { user } = useSelector(state => state.auth)
    const { products } = useSelector(state => state.products)

    const enquiryId = match.params.id;

    const statusList = [
      "New",
      "Processing",
      "Converted",
      "Cancelled"
    ]

    useEffect(() => {

      dispatch(getProducts());

      if (enquiry && enquiry._id !== enquiryId) {
          dispatch(getEnquiryDetails(enquiryId));
      } else {
        setNote(enquiry.note);
        setName(enquiry.name);
        setPlace(enquiry.place);
        setPhoneNo(enquiry.phoneNo);
        setEmail(enquiry.email);
        setEnquiryStatus(enquiry.enquiryStatus);
        setProduct(enquiry.product);
      }

      if (error) {
          alert.error(error);
          dispatch(clearErrors())
      }

      if (updateError) {
          alert.error(updateError);
          dispatch(clearErrors())
      }

      if (isUpdated) {
          alert.success('Enquiry updated successfully');
          history.push('/admin/enquiries');
          dispatch({ type: UPDATE_ENQUIRY_RESET })
          // to refresh after updation
          // window.location.reload();
      } 

  }, [dispatch, alert, error, isUpdated, history, updateError, enquiry, enquiryId])

  const submitHandler = (e) => {
    e.preventDefault();

    const updateenquiry = {
        'note': note,
        'name': name,
        'place': place,
        'phoneNo': phoneNo,
        'email': email,
        'enquiryStatus': enquiryStatus,
        'product': product,
    }

    dispatch(updateEnquiry(enquiry._id, updateenquiry))

  }

  return (<>
          
    <Fragment>
      <MetaData title={'Update Enquiry'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar enquiries />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Update Enquiry</h1>

            <form className="db_product_form" onSubmit={submitHandler}>
              <div className="db__new_prdt">
                <div className="db__prdt_name_price">
                  <div className="db__column">
                    <label htmlFor="name_field">Name</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="freeSpace new"></div>

                  <div className="db__column">
                    <label htmlFor="name_field">Place</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                    />
                  </div>
                  
                </div>
                <div className="db__prdt_name_price">
                  <div className="db__column">
                    <label htmlFor="name_field">Phone</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </div>
                  <div className="freeSpace new"></div>

                  <div className="db__column">
                    <label htmlFor="name_field">Email</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                </div>
                <div className="db__prdt_name_price">
                <div className="db__column">
                    
                    <label htmlFor="status_field">Status</label>                  
                    <select className="form-control" id="status_field" value={enquiryStatus} onChange={(e) => setEnquiryStatus(e.target.value)}>
                        
                        {statusList.map(status => (
                            <option key={status} value={status} >{status}</option>
                        ))}
                    </select>

                </div>
                <div className="freeSpace new"></div>

                <div className="db__column">
                  <label htmlFor="name_field">Product</label>
                  <select className="form-control" id="category_field" value={product} onChange={(e) => setProduct(e.target.value)}>
                        {/* <option>Select a product...</option> */}
                        {/* <option value={product}> {product.name}</option> */}
                        {products.map(product => (
                            <option key={product._id} value={product._id} >{product.name}</option>
                        ))}
                    </select>
                </div>
                </div>

                <div className="db__column">
                  <label htmlFor="note_field">Note</label>
                  <textarea 
                    className="form-control"
                    id="note_field" 
                    rows="4" 
                    value={note} 
                    onChange={(e) => setNote(e.target.value)}>
                  </textarea>
                </div>
                
                <div className="db_btn__add">
                  <button 
                    className="btn add__prdt flex"
                    type="submit"
                    disabled={loading ? true : false}
                  >Update Enquiry</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
    </>
  );
};

export default DbUpdateEnquiry;