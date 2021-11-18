import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


import { NEW_ENQUIRY_RESET } from "../../../constants/enquiryConstants";
import { newEnquiry, clearErrors } from "../../../actions/enquiryActions";


const ContactFrom = ({ ishomeBottom, history, isHidden, isModal, setOpen }) => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [place, setPlace] = useState("");
  const [productId, setProductId] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { success, error } = useSelector((state) => state.newEnquiry);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Enquiry submitted successfully");
      dispatch({ type: NEW_ENQUIRY_RESET });
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

        const formData = new FormData();
        formData.set("product", "615884a17c32769118092a50");
        formData.set("note", isModal ? "empty" : note);
        formData.set("name", isModal ? "empty" : name);
        formData.set("phoneNo", phoneNo);
        formData.set("email", email);
        formData.set("place", isModal ? "empty" : place);
        
        dispatch(newEnquiry(formData));
        isModal && setOpen(false);

        setProductId('')
        setNote('')
        setName('')
        setPhoneNo('')
        setEmail('')
        setPlace('')

  };


  return (
    <div id={`${isModal && "new_edit"}`}>
      {isModal && (
        <img src="/images/Ast/contact-title-image.png" alt="contact" />
      )}
      <section
        id="contact modal_new"
        className={`${ishomeBottom ? "white" : ""}`}
      >
        <h1 className="section-header">
          {isModal ? "How May I Help You" : "Contact"}
        </h1>
        {isModal && (
          <p className="edit_p">Our team will get back to you shortly</p>
        )}

        <div className="contact-wrapper">
          <form
            id="contact-form"
            className="form-horizontal"
            onSubmit={submitHandler}
          >
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type={isModal ? "hidden" : "text"}
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="number"
                  className="form-control new_edit_input"
                  id="phone"
                  placeholder="Moblie"
                  name="phone"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control new_edit_input"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="hidden"
                  className="form-control"
                  id="productId"
                  placeholder="productId"
                  name="productId"
                  value={isModal ? "dialog_productId" : productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type={isModal ? "hidden" : "text"}
                  className="form-control"
                  id="place"
                  placeholder="Place"
                  name="place"
                  value={isModal ? "dialog_place" : place}
                  onChange={(e) => setPlace(e.target.value)}
                />
              </div>
            </div>

            {!isModal ? (
              <>
                <textarea
                  className="form-control"
                  rows="3"
                  type="text"
                  placeholder="Message"
                  name="note"
                  value={note}
                  required
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </>
            ) : (
              <>
                <input
                  type="hidden"
                  name="note"
                  value="dialog_note"
                  onChange={(e) => setNote(e.target.value)}
                />
              </>
            )}

            <div className="flex new_cancel">
                <button
                  className="btn btn-success send-button"
                  id="submit"
                  type="submit"
                >
                  <div className="alt-send-button">
                    <span className="send-text">SEND</span>
                    <FaPaperPlane />
                  </div>
                </button>
              {isModal && (
                <button
                  onClick={() => setOpen(false)}
                  className="btn btn-danger cancel_new_btn flex"
                >
                  cancel
                </button>
              )}
            </div>
          </form>

          {!isHidden && (
            <div className="direct-contact-container flex">
              <ul className="contact-list">
                <li className="list-item">
                  <FaPhone className=" fa-phone" />
                  <span className="contact-text phone">
                    <a href="tel:055 2427521" title="Give me a call">
                      <p className="contact-text place">Abu Dhabi , Al Ain</p>
                      <p className="contact-text mobile">055 2427521</p>
                    </a>
                  </span>
                </li>
                <li className="list-item">
                  <FaPhone className=" fa-phone" />
                  <span className="contact-text phone">
                    <a href="tel:055 2427521" title="Give me a call">
                      <p className="contact-text place">
                        Dubai , Northern Emirates
                      </p>
                      <p className="contact-text mobile">055 1954778</p>
                    </a>
                  </span>
                </li>

                <li className="list-item tw">
                  <FaEnvelope className="envolp" size="1.5rem" />
                  <span className="contact-text gmail">
                    <a
                      href="mailto:sales@astshelving.com"
                      title="Send me an email"
                    >
                      sales@astshelving.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactFrom;
