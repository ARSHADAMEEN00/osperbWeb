import React, { Fragment, useEffect } from "react";
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

//Backend Imports
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import MetaData from "../../../layout/MetaData";
import Loader from "../../../layout/Loader";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdminComplaints,
  deleteComplaint,
  clearErrors,
} from "../../../../actions/complaintActions";
import { DELETE_COMPLAINT_RESET } from "../../../../constants/complaintsConstants";
import { FaTrash } from "react-icons/fa";

const DbComplaints = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, complaints } = useSelector(
    (state) => state.complaints
  );
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.complaint
  );

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAdminComplaints());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Complaint deleted successfully");
      history.push("/admin/complaints");
      dispatch({ type: DELETE_COMPLAINT_RESET });
    }
  }, [dispatch, alert, error, deleteError, isDeleted, history]);

  const setComplaints = () => {
    const data = {
      columns: [
        {
          label: "Name",
          field: "clientName",
          sort: "asc",
        },
        {
          label: "Details",
          field: "clientDetails",
          sort: "asc",
        },
        {
          label: "Subject",
          field: "subject",
          sort: "asc",
        },
        // {
        //     label: 'Description',
        //     field: 'description',
        //     sort: 'asc'
        // },
        {
          label: "Status",
          field: "complaintStatus",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };
    complaints.forEach((complaint) => {
      data.rows.push({
        clientName: complaint.clientName,
        clientDetails: complaint.clientDetails,
        subject: complaint.subject,
        description: complaint.description,
        complaintStatus: complaint.complaintStatus,
        actions: (
          <Fragment>
            <Link
              to={`/admin/complaint/${complaint._id}`}
              className="btn py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button
              className="btn flex  py-1 px-2 ml-2"
              onClick={() => deleteComplaintHandler(complaint._id)}
            >
              <FaTrash className="fa-trash" />
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteComplaintHandler = (id) => {
    dispatch(deleteComplaint(id));
  };

  return (
    <Fragment>
      <MetaData title={"All Enquiries"} />

      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar complaints allComplaints />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>All Complaints</h1>

            <div className="db__table">
              {loading ? (
                <Loader />
              ) : (
                <MDBDataTable
                  responsive
                  exportToCSV
                  data={setComplaints()}
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

export default DbComplaints;
