import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { FaPhone } from "react-icons/fa";

import "./contactForm.css";

import { NEW_ENQUIRY_RESET } from "../../../constants/enquiryConstants";
import { newEnquiry, clearErrors } from "../../../actions/enquiryActions";

const GoogleMap = ({ home, history }) => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [place, setPlace] = useState("");

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
    formData.set("note", note);
    formData.set("name", name);
    formData.set("phoneNo", phoneNo);
    formData.set("email", email);
    formData.set("place", "place");
    dispatch(newEnquiry(formData));

    setName("");
    setEmail("");
    setPhoneNo("");
    setNote("");
  };

  return (
    <>
      <section className="ftco-section">
        <div className="contai">
          <div className=" maps">
         
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15714.474788022773!2d76.2954399!3d10.0482897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefd1d5072b21d6d!2sLoha%20Steels!5e0!3m2!1sen!2sin!4v1634308433213!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{border:"0"}}
              allowfullscreen
              loading="lazy"
              title="myFrame"
            ></iframe>
          </div>
          <div className="form_right">
            <h3 className="mb-4">Enquire Now</h3>
            <div id="form-message-warning" className="mb-4"></div>
            <form
              onSubmit={submitHandler}
              method="POST"
              id="contactForm"
              name="contactForm"
              className="contactForm"
            >
              <div className="centered">
                <input
                  type="text"
                  className="textfield"
                  required
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="centered">
                <input
                  type="text"
                  className="textfield"
                  required
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="centered">
                <input
                  type="number"
                  className="textfield"
                  required
                  placeholder="Phone"
                  name="phone"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
              <div className="centered">
                <input
                  type="hidden"
                  className="form-control"
                  id="place"
                  placeholder="Place"
                  name="place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
              </div>
              <div className="centered">
                <textarea
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="1"
                  placeholder="Message"
                  name="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>

              <div className="col-md-12 button_btn">
                <button className=" btn btn-success submitting flex">submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className=" map_address">
          <div className="address_wrap">
            <div className="dbox w-100 ">
              <div className="text">
                <h1> Palakkad</h1>
                <p>
                  XIX/338 G, Manjalungal, Pattambi, Palakkad, Kerala, 679313
                </p>
              </div>
            </div>
            <div className="dbox w-100 ">
              <div className="text">
                <h1>Malappuram</h1>
                <p>
                  4/20-A , Iringallur, Puthanparamba, Vengara, Malappuram 676304
                </p>
              </div>
            </div>
            <div className="dbox w-100 " style={{marginTop: "-20px"}}>
              <div className="text">
                <h1>Kochi</h1>
                <p>Amrita Nagar, Edappally, Kochi, Kerala 682024</p>
              </div>
            </div>
          </div>
          <div className="map_icons_wrap ">
            <div className="map_phone">
              <a href="tel://+919645700075">
                <FaPhone className="fa_phone" />
                +91 9645700074
              </a>
              <a href="tel://+919645700074">
                <FaPhone className="fa_phone" />
                +91 9645700075
              </a>
              <a href="tel://+919645700079">
                <FaPhone className="fa_phone" />
                +91 9645700079
              </a>

              {/* <FaMapMarker /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoogleMap;
