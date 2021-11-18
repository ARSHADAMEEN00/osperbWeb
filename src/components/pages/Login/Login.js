import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import { register, login } from "../../../actions/userActions";

import Footer from "../../layout/Footer";
import MetaData from "../../layout/MetaData";
import NavBar from "../../layout/NavBar";

import "../singlePages.css";

const Login = () => {
  // const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, user, error } = useSelector((state) => state.auth);
  // Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register
  const [REG_firstName, setREG_firstName] = useState("");
  const [REG_lastName, setREG_lastName] = useState("");
  const [REG_email, setREG_email] = useState("");
  const [REG_password, setREG_password] = useState("");

  // state for login toggle
  const [loginActive, setloginActive] = useState(true);
  //register toggle state
  const [regiActive, setregiActive] = useState(false);

  useEffect(() => {
    if (error) {
      history.push("/");
      swal({
        title: "",
        text: error,
        icon: "error",
      });
    }
    if (user && user.firstName) {
      history.push("/");
    }
  }, [user, error, history]);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const registerSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("firstName", REG_firstName);
    formData.set("lastName", REG_lastName);
    formData.set("email", REG_email);
    formData.set("password", REG_password);

    dispatch(register(formData));

    swal({
      title: "Please Verify",
      text: `Verification Link has been send to ${REG_email}`,
      icon: "info",
      button: "Close",
    }).then(() => {
      history.push("/");
    });
    setregiActive(false);
  };
  const toggle = () => {
    //register
    setregiActive(false);
    setloginActive(true);
  };
  const newToggle = () => {
    //login
    setregiActive(true);
    setloginActive(false);
  };

  return (
    <>
      <MetaData title={"login"} />
      <NavBar />
      <div
        id="singleLogin"
        style={{ backgroundImage: "url(/images/laymr/layamr-scarf-dubai.jpg)" }}
      >
        <>
          {loginActive === true && (
            <>
              {/* LOGIN SECTION START  */}
              <div className="login__wrapper show">
                <div className="login__modal active flex">
                  <div className="login__content flex">
                    <h1>Login</h1>
                    <form className="input__gp " onSubmit={loginSubmitHandler}>
                      <input
                        type="email"
                        id="login_email_fieldT"
                        placeholder="Email"
                        required={"required"}
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        id="login_password_fieldT"
                        placeholder="Pasword"
                        required={"required"}
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <div className="login__button flex">
                        <button
                          id="login_buttonT"
                          type="submit"
                          className="flex btn--login"
                        >
                          Login
                        </button>

                        <Link className="forgot" to="/password/forgot">
                          <p>Forgot password</p>
                        </Link>
                      </div>
                    </form>

                    <div className="create__ac flex">
                      <p>Don't have an account ?</p>
                      <button onClick={newToggle}>Create account</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
        {/* CREATE ACCOUNT START */}
        {regiActive === true && (
          <div id="create_new" className="login__wrapper show">
            <div
              className="register__modal active
           login__modal flex"
            >
              <div className="register__content login__content flex">
                <h1>Create Account</h1>
                <form
                  className="register__form input__gp"
                  onSubmit={registerSubmitHandler}
                  encType="multipart/form-data"
                >
                  <input
                    type="name"
                    id="firstName_field"
                    className="form-control"
                    placeholder="First Name"
                    required={"required"}
                    name="REG_firstName"
                    value={REG_firstName}
                    onChange={(e) => setREG_firstName(e.target.value)}
                  />
                  <input
                    type="name"
                    id="lastName_field"
                    placeholder="Last Name"
                    name="REG_lastName"
                    required={"required"}
                    value={REG_lastName}
                    onChange={(e) => setREG_lastName(e.target.value)}
                  />
                  <input
                    type="email"
                    id="reg_email_field"
                    required={"required"}
                    placeholder="Email"
                    name="REG_email"
                    value={REG_email}
                    onChange={(e) => setREG_email(e.target.value)}
                  />

                  <input
                    type="password"
                    id="password_field"
                    required={"required"}
                    placeholder="Password"
                    name="REG_password"
                    value={REG_password}
                    onChange={(e) => setREG_password(e.target.value)}
                    minLength="6"
                  />

                  <div className="register__terms">
                    <p>
                      A verification link will be send to your email. By
                      submitting this form, you agree to our
                      <Link to="/terms" className="highlight">
                        {" "}
                        terms of Use{" "}
                      </Link>
                      and{" "}
                      <Link to="/privacy" className="highlight">
                        privacy policy
                      </Link>
                    </p>
                  </div>
                  <div className="login__button flex">
                    <button
                      id="register_button"
                      type="submit"
                      className="flex btn--login"
                      disabled={loading ? true : false}
                    >
                      Register
                    </button>

                    <div className="forgot" onClick={toggle}>
                      <p>Already have an account?</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Login;
