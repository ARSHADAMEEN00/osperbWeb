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
import { getAdminProjects, clearErrors, deleteProject } from "../../../../actions/projectActions"; 
import { DELETE_PROJECT_RESET } from '../../../../constants/projectConstants'
import { FaTrash } from "react-icons/fa";

//import moment for date
import moment from "moment";

const DbProjects = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, projects } = useSelector((state) => state.projects);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.project
  );

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAdminProjects());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
        alert.success('Project deleted successfully');
        history.push('/admin/projects');
        dispatch({ type: DELETE_PROJECT_RESET })
    }
  }, [dispatch, alert, error, history, isDeleted, deleteError]);

  const setProjects = () => {
    const data = {
      columns: [
        {
          label: "Date",
          field: "date",
          sort: "asc",
        },
        {
          label: "Title",
          field: "title",
          sort: "asc",
        },
        {
          label: "VideoId",
          field: "videoId",
          sort: "asc",
        },
        // {
        //     label: 'Description',
        //     field: 'description',
        //     sort: 'asc'
        // },
        {
          label: "Featured",
          field: "isFeatured",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    }

    projects.forEach(project => {
      data.rows.push({
          title: project.title,
          videoId: project.videoId,
          description: project.description,
          date: moment( project && project.date).format('DD-MM-YYYY  LT'),
          isFeatured: project.isFeatured,
          actions: <Fragment>
              <Link to={`/admin/project/${project._id}`} className="btn py-1 px-2">
                  <i className="fa fa-pencil"></i>
              </Link>
              <button className="btn flex py-1 px-2 ml-2" onClick={() => deleteProjectHandler(project._id)}>
                  <FaTrash className="fa-trash"/>
              </button>
          </Fragment>
      })
  })

    return data;
  };

  const deleteProjectHandler = (id) => {
    dispatch(deleteProject(id))
  }

  return (
    <Fragment>
      <MetaData title={"All Projects"} />

      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar projects allPrjs />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>All Projects</h1>

            <div className="db__table">
              {loading ? (
                <Loader />
              ) : (
                <MDBDataTable
                responsive

                  exportToCSV
                  data={setProjects()}
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

export default DbProjects;
