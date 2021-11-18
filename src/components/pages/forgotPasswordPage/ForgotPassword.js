import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, clearErrors } from "../../../actions/userActions";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import "../singlePages.css";
const ForgotPassword = ({ history, match }) => {
  const [email, setEmail] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error, message]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("email", email);

    dispatch(forgotPassword(formData));
  };

  return (
    <Fragment>
      <MetaData title={"Forgot Password"} />
      <NavBar BrownTheme/>
      <section className="verify__account">

        <div className="verify__modal flex" id="modal-very">
          <form id="forgot" onSubmit={submitHandler}>
            <div className="login__content flex">
              <h1>Forgot Password ?</h1>
              <p>An email will be send with the password reset link.</p>
              <input
                type="email"
                id="email_field"
                placeholder="Enter your email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="create__ac forgot flex">
                <button type="submit" disabled={loading ? true : false}>
                  Send Email
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default ForgotPassword;
