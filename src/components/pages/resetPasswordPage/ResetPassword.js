import React, { Fragment, useState, useEffect, useContext } from 'react'
import MetaData from '../../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, clearErrors } from '../../../actions/userActions'
import NavBar from '../../layout/NavBar'
import Footer from '../../layout/Footer'
import "../singlePages.css"

//context 
import { AppContext } from '../../../AppContext'

const ResetPassword = ({ history, match }) => {

    //context
    const { setLoginState } = useContext(AppContext)

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Password updated successfully')
            setLoginState(true);
            history.push('/login')
        }

    }, [dispatch, alert, error, success, history, setLoginState])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);

        dispatch(resetPassword(match.params.token, formData))
    }

    return (

        <Fragment>

            <MetaData title={'Reset Password'} />
            <NavBar BrownTheme />
            <section className="verify__account">

                <div className="verify__modal flex" id="modal_rest">
                    <form onSubmit={submitHandler} id="modal-very rest_modal_n">
                        <div className="login__content flex">
                            <h1>Reset Password</h1>
                            <p>Please enter new password for your account.</p>
                            {/* <p>Send to tester@gmail.com</p> */}
                            <input
                                type="password"
                                id="password_field"
                                placeholder='Password'
                                className="form-control  mb-4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input
                                type="password"
                                id="confirm_password_field"
                                placeholder='Confirm Password'
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <div className="create__ac reset flex">
                                <button
                                    type="submit"
                                    className="btn-success flex"

                                >Set Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default ResetPassword
