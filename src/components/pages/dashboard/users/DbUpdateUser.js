import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

// Backend Imports
import MetaData from '../../../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getUserDetails, clearErrors } from '../../../../actions/userActions'
import { UPDATE_USER_RESET } from '../../../../constants/userConstants'

const DbUpdateUser = ({ history, match }) => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector(state => state.user);
    const { user } = useSelector(state => state.userDetails)

    const userId = match.params.id;

    useEffect(() => {

        if (user && user._id !== userId) {
            dispatch(getUserDetails(userId))
        } else {
            setUserName(user.userName);
            setEmail(user.email);
            setRole(user.role)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully')

            history.push('/admin/users')

            dispatch({
                type: UPDATE_USER_RESET
            })

            // to refresh after updation  
            // window.location.reload();
        }

    }, [dispatch, alert, error, history, isUpdated, userId, user])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('userName', userName);
        formData.set('email', email);
        formData.set('role', role);

        dispatch(updateUser(user._id, formData))
    }


  return (
    <Fragment>
      <MetaData title={`Update User`} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar users />
        </div>
        <div className="db__home_left">
          <DbHeader />
          <div className="db__reviews db__orders">
            <h1>Update Profile</h1>
            <div className="db__table db__user_edit profile_new">
              <form onSubmit={submitHandler}>
                <label htmlFor="firstName_field">User Name</label>
                <div className="input__wrap flex">
                  <input
                      type="name"
                      id="firstName_field"
                      className="form-control"
                      name='userName'
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <label htmlFor="firstName_field">User Email</label>
                
                <div className="input__wrap flex">
                  <input
                      type="email"
                      id="email_field"
                      className="form-control"
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex user__wrap">
                  <div className="user__type">
                  <label htmlFor="role_field">Role</label>
                    <select
                      id="role_field"
                      className="form-control"
                      name='role'
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="admin">admin</option>
                    </select>
                  </div>
                  <button type="submit" className= "flex btn flex btn__user__up">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbUpdateUser;
