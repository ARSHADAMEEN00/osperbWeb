import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newComplaint, clearErrors } from '../../../../actions/complaintActions'
import { NEW_COMPLAINT_RESET } from '../../../../constants/complaintsConstants'

export const DbCreateComplaint = ({ history }) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth)
  const { loading, error } = useSelector(state => state.complaintDetails);
  const { error:complaintError, success } = useSelector((state) => state.newComplaint); 

    // coomplaint modal
  const [clientName, setClientName] = useState("");
  const [clientDetails, setClientDetails] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (complaintError) {
      alert.error(complaintError);
      dispatch(clearErrors());
    }

    
    
    //updated review for enquiry on here
    if (success) {
      history.push('/admin/complaints');
      alert.success("Complaint submitted successfully");
      dispatch({ type: NEW_COMPLAINT_RESET });
    }
  }, [dispatch, alert, error, success, history, complaintError]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("clientName", clientName);
    formData.set("clientDetails", clientDetails);
    formData.set("subject", subject);
    formData.set("description", description);

    dispatch(newComplaint(formData));
  };

    return (
        <Fragment>
      <MetaData title={'Create Complaint'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar complaints />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Create Complaint</h1>

            <form className="db_product_form" onSubmit={submitHandler}>
              <div className="db__new_prdt">
                <div className="db__prdt_name_price">
                  <div className="db__column">
                    <label htmlFor="name_field">Client Name</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
                  
                  
                </div>
                <div className="db__column">
                    <label htmlFor="name_field">Client Details</label>
                    <textarea 
                    className="form-control"
                    id="note_field"
                    rows="3" 
                    value={clientDetails} 
                    onChange={(e) => setClientDetails(e.target.value)}>
                  </textarea>
                </div>
                <div className="db__prdt_name_price">
                  <div className="db__column">
                    <label htmlFor="name_field">Subject</label>
                    <input
                      type="text"
                    className="form-control"
                    id="note_field"
                    rows="1" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)}>
                  </input>
                  </div>
                </div>
                
                <div className="db__column">
                    <label htmlFor="name_field">Description</label>
                    <textarea 
                    className="form-control"
                    id="note_field"
                    placeholder='Tell us something more'
                    rows="4" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}>
                  </textarea>
                </div>

                <div className="db_btn__add">
                  <button 
                    className="btn add__prdt flex"
                    type="submit"
                    disabled={loading ? true : false}
                  >Create Complaint</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
    )
}
