import React, { Fragment, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { Link } from "react-router-dom";

// Backend Imports
import { MDBDataTable } from 'mdbreact'

import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, clearErrors } from '../../../../actions/userActions'
import { DELETE_USER_RESET } from '../../../../constants/userConstants'

const DbUsers = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, users } = useSelector(state => state.allUsers);
    const { isDeleted } = useSelector(state => state.user)

    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(allUsers());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('User deleted successfully');
            history.push('/admin/users');
            dispatch({ type: DELETE_USER_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])

   

    const setUsers = () => {
        const data = {
            columns: [
                {
                    label: 'User ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Role',
                    field: 'role',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        users.forEach(user => {
          data.rows.push({
              id: user._id,
              name: `${user.userName}`,
              email: user.email,
              role: user.role,

              actions: <Fragment>
                  <Link to={`/admin/user/${user._id}`} className="btn py-1 px-4">
                      <i className="fa fa-pencil"></i>
                  </Link>
              </Fragment>
          })
      })

      return data;
  }

  return (
    <Fragment>
      <MetaData title={'All Users'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar users allUsers/>
        </div>
        <div className="db__home_left">
        <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>All Users</h1>

            <div className="db__table">
              {loading ? <></> : (
                  <MDBDataTable
                responsive

                      data={setUsers()}
                      className="px-3"
                      bordered
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

export default DbUsers;
