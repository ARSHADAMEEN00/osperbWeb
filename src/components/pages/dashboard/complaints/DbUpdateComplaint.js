import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateComplaint, getComplaintDetails, clearErrors } from '../../../../actions/complaintActions'
import { UPDATE_COMPLAINT_RESET } from '../../../../constants/complaintsConstants'

const DbUpdateComplaint = ({ match, history }) => {

    const [clientName, setClientName] = useState("");
    const [clientDetails, setClientDetails] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [complaintStatus, setComplaintStatus] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, complaint } = useSelector(state => state.complaintDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.complaint);
    const { user } = useSelector(state => state.auth)

    const complaintId = match.params.id;

    const statusList = [
      "Processing",
      "Pending",
      "Solved"
    ]

    useEffect(() => {


      if (complaint && complaint._id !== complaintId) {
          dispatch(getComplaintDetails(complaintId));
      } else {
        setClientName(complaint.clientName);
        setClientDetails(complaint.clientDetails);
        setSubject(complaint.subject);
        setDescription(complaint.description);
        setComplaintStatus(complaint.complaintStatus);
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
        dispatch(getComplaintDetails(complaintId));
          alert.success('Complaint updated successfully');
          history.push('/admin/complaints');
          dispatch({ type: UPDATE_COMPLAINT_RESET })
          // to refresh after updation
          // window.location.reload();
      }

  }, [dispatch, alert, error, isUpdated, history, updateError, complaint, complaintId])

  const submitHandler = (e) => {
    e.preventDefault();

    const updatecomplaint = {
        'clientName': clientName,
        'clientDetails': clientDetails,
        'subject': subject,
        'description': description,
        'complaintStatus': complaintStatus,
    }

    dispatch(updateComplaint(complaint._id, updatecomplaint))

  }

  return (
    <Fragment>
      <MetaData title={'Update Complaint'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar complaints />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Update Complaint</h1>

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
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)}>
                  </input>
                  </div>
                </div>

                <div className="db__column">
                    
                    <label htmlFor="status_field">Status</label>                  
                    <select className="form-control" id="status_field" value={complaintStatus} onChange={(e) => setComplaintStatus(e.target.value)}>
                        
                        {statusList.map(status => (
                            <option key={status} value={status} >{status}</option>
                        ))}
                    </select>

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
                  >Update Complaint</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbUpdateComplaint;