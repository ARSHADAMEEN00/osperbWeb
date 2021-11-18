import React, { Fragment, useEffect, useContext } from 'react'
import MetaData from '../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { verifyUser, clearErrors } from '../../../actions/userActions'
import NavBar from '../../layout/NavBar'
import Footer from '../../layout/Footer'
import "../singlePages.css"

//context
import { AppContext } from '../../../AppContext'

const VerifyAccount = ({ history, match }) => {

    //context
    const { setLoginState } = useContext(AppContext)

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.verifyUser)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('User verified successfully')
            setLoginState(true);
            history.push('/')
        }

    }, [dispatch, alert, error, success, history,setLoginState])

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(verifyUser(match.params.token));
    }

    return (

        <Fragment>

            <MetaData title={'Confirmation'} />
            <NavBar />
            <section className="verify__account">
                <img src="/images/others/login__bgImg2.jpg" alt="login-bg" />
                <div className="verify__modal flex" id="new_modal">
                    <div className="login__image">
                        <img src="/images/others/login_img3.jpeg" alt="login-left" />
                    </div>
                    <form onSubmit={submitHandler} id="verify_ac">
                        <div className="login__content flex">
                            <h1>Verify your account</h1>
                            <p >Further communications regarding your purchase will be proceeded through this email.</p>

                            <div className="create__ac verify flex" id="verfyAC">
                                <button
                                    type="submit"
                                >Verify your account</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default VerifyAccount
