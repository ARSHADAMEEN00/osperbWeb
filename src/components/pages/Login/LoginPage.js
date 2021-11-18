import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../singlePages.css'

// Backend Imports
import { useDispatch, useSelector } from "react-redux";
import { login, loadUser, clearErrors } from "../../../actions/userActions";

import { useAlert } from "react-alert";
import NavBar from "../../layout/NavBar";

const LoginPage = ({ homepg, BrownTheme, allproduct,history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
 
  // Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const {  isAuthenticated, error, isLoggedIn } = useSelector((state) => state.auth);
  

  useEffect(() => {
    loadUser();
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      alert.success('logged in');
      history.push('/dashboard')
    }

  }, [dispatch, alert, error, isAuthenticated, isLoggedIn,history]);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return ( <>
  <NavBar BrownTheme />
    <div className="login_section">
      {/* LOGIN SECTION START  false */}
      <div className="login__wrapper">
        <div className="login__modal">
          
          <div className="login__content flex">
            <h1>Login</h1>
            <form className="input__gp " onSubmit={loginSubmitHandler}>
              <input
                type="email"
                id="login_email_field"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="login_password_field"
                placeholder="Pasword"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="login__button flex">
                <button
                  id="login_button"
                  type="submit"
                  className="flex btn--login"
                >
                  Login
                </button>

                <Link to="/password/forgot" className="forgot" >
                  <p>Forgot password</p>
                </Link>
              </div>
            </form>

          
          </div>
        </div>
      </div>
      {/* LOGIN SECTION END */}
    </div>
  </>);
};

export default LoginPage;
