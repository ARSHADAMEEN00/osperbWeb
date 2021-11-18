import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { newReview, clearErrors } from "../../../actions/reviewActions";
import { NEW_REVIEW_RESET } from "../../../constants/reviewConstants";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import "../singlePages.css";

const ReviewPage = ({ history, match }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.newReview);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      history.push("/");
      alert.success("Review submitted successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", message);

    dispatch(newReview(formData));
  };

  return (
    <Fragment>
      <MetaData title={"Review"} />
      <NavBar />
      <section className="verify__account">
        <img src="/images/others/login__bgImg6.jpg" alt="" />
        <div className="verify__modal reviewImage flex" id="review">
          <div className="login__image ">
            <img src="/images/others/login_img2.jpeg" alt="forgotpassword" />
          </div>
          <form id="review" onSubmit={submitHandler}>
            <div className="login__content flex">
              <h1>Review Us</h1>
              <p>We value your suggestions.</p>

              <input
                type="text"
                id="name_field"
                placeholder="Name"
                className="form-control mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                id="email_field"
                placeholder="Email"
                className="form-control mb-4"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rows="3"
                type="text"
                id="message_field"
                placeholder="Message"
                className="form-control mb-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <div className="create__ac review flex">
                <button
                  className="btn-success"
                  type="submit"
                  disabled={loading ? true : false}
                >
                  Submit Review
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

export default ReviewPage;
