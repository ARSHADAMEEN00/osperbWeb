import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newEnquiry, clearErrors } from '../../../../actions/enquiryActions'
import { NEW_ENQUIRY_RESET } from '../../../../constants/enquiryConstants'
import { getProducts } from '../../../../actions/productActions'

export const DbCreateEnquiry = ({ history }) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth)
  const { loading, error } = useSelector(state => state.enquiryDetails);
  const {  error:enquiryError, success } = useSelector((state) => state.newEnquiry); 
  const {error:productError, products } = useSelector(state => state.products)

    // enquire modal
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [product, setProduct] = useState("");

  useEffect(() => {
    dispatch(getProducts());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (enquiryError) {
      alert.error(enquiryError);
      dispatch(clearErrors());
    }

    if(productError){
      return alert.error(productError)
    }
    
    //updated review for enquiry on here
    if (success) {
      history.push('/admin/enquiries');
      alert.success("Enquiry submitted successfully");
      dispatch({ type: NEW_ENQUIRY_RESET });
    }
  }, [dispatch, alert, error, success, history, enquiryError, productError]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("product", product);
    formData.set("note", note);
    formData.set("name", name);
    formData.set("place", place);
    formData.set("phoneNo", phoneNo);
    formData.set("email", email);

    dispatch(newEnquiry(formData));
  };

    return (
        <Fragment>
      <MetaData title={'Create Enquiry'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar enquiries CreateEnquiry/>
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Create Enquiry</h1>

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
                {/* <div className="db__column">
                    
                    <label htmlFor="name_field">Status</label>
                    <select
                      id="name_field"
                      className="form-control"
                      name='enquiryStatus'
                      value={enquiryStatus}
                      onChange={(e) => setEnquiryStatus(e.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="processing">Processing</option>
                      <option value="converted">Converted</option>
                      <option value="cancelled">Cancelled</option>
                    </select> 
                </div> */}
                <div className="db__column">
                  <label htmlFor="name_field">Product</label>
                  <select className="form-control" id="category_field" value={product} onChange={(e) => setProduct(e.target.value)}>
                        <option>Select a product...</option>
                        {products.map(product => (
                            <option key={product._id} value={product._id} >{product.name}</option>
                        ))}
                    </select>
                </div>
                

                <div className="db__column">
                  <label htmlFor="note_field">Note</label>
                  <textarea 
                    className="form-control"
                    id="note_field"
                    placeholder='Tell us something more'
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
                  >Create Enquiry</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
    )
}
