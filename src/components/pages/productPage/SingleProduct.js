import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./singleProduct.css";
// slider css links
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// react icons
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";

//Backend Imports
import Loader from "../../layout/Loader";
import MetaData from "../../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  clearErrors,
} from "../../../actions/productActions";
import { getProducts } from "../../../actions/productActions";

// modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { newEnquiry } from "../../../actions/enquiryActions";
import { NEW_ENQUIRY_RESET } from "../../../constants/enquiryConstants";
import { motion } from "framer-motion";
import { Fragment } from "react";

import ContactUs from "../ContactFrom/ContactUs"

const SingleProduct = ({ match, history }) => {
  // modal
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);



  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  // Explore section products
  const { error: productsError, products } = useSelector(
    (state) => state.products
  );

  const productId = match.params.id;

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
      dispatch(getProducts());
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (productsError) {
      return alert.error(error);
    }

    dispatch(getProducts());
  }, [dispatch, alert, error, productsError, product, productId]);

  // enquiry modal
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const { success } = useSelector((state) => state.newEnquiry); //here

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    //updated review for enquiry on here
    if (success) {
      alert.success("Enquiry submitted successfully");
      dispatch({ type: NEW_ENQUIRY_RESET });
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("product", product._id);
    formData.set("note", note);
    formData.set("name", name);
    formData.set("place", place);
    formData.set("phoneNo", phoneNo);
    formData.set("email", email);

    dispatch(newEnquiry(formData));
  };

  const productVariant = {
    hidden: {
      y: 15,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 8,
        delay: 0,
        mass: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };
  const productDetailVar = {
    hidden: {
      y: 15,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const tabelVariant = {
    hidden: {
      y: 15,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 8,
        delay: 1.8,
        mass: 0.3,
      },
    },
  };
  const productUrl = {
    url: 'layamr.com'
  }
  const newProduct = product?.images?.slice(1)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={product.name} content={""} />
          <NavBar BrownTheme />
          {/* //product details section start */}
          <section className="single___product">
            <div className="product___details flex">
              {/* <img src="/images/new.jpg" alt="bg" /> */}
              {/* <Abstract /> */}
              <div className="product___slider">
                {newProduct?.map((image, index) => (
                  <div className="slider__pdt_img" key={index}>
                    <img
                      className="d-block w-100"
                      src={`${process.env.REACT_APP_BASE_URL}${image.url}`}
                      alt={product.name}
                    />
                  </div>
                ))}
              </div>
              <div className="product___content">
                <div className="card_content sptd">
                  <motion.div
                    variants={productVariant}
                    initial="hidden"
                    animate="visible"
                    className="card_content_hed"
                  >
                    <motion.h1 variants={productDetailVar}>
                      {product?.name}
                    </motion.h1>
                    {/* <motion.p
                      variants={productDetailVar}
                      className="currency__value"
                    >
                      {systemSettings?.defaultCurrency} {price * quantity}
                    </motion.p> */}
                    <motion.p variants={productDetailVar}>
                      {product?.description}
                    </motion.p>
                  </motion.div>
                  <motion.div
                    variants={tabelVariant}
                    initial="hidden"
                    animate="visible"
                    className="table__content"
                  >
                    <table className="table__items">
                      <thead>
                        {product.specs?.map((spec, index) => (
                          <tr key={index}>
                            <td>{spec.title}</td>
                            <td>:</td>
                            <td>{spec.details}</td>
                          </tr>
                        ))}
                      </thead>
                      <tfoot></tfoot>
                    </table>
                  </motion.div>
                </div>
                <div className="weights">
                  <p>
                    {product.isDeleted && (
                      <span id="stock_status" className="redColor">
                        Not available
                      </span>
                    )}
                  </p>

                  {/* <p className="currency__value">
                    {systemSettings?.defaultCurrency} {price * quantity}
                  </p> */}
                  <div className="product___button hide_small">
                    <button onClick={() => window.location.href = `https://${productUrl.url}`} className="btn flex">
                      view project
                    </button>
                  </div>
                </div>
                <div className="product___button hide_big">
                  <button className="btn flex">
                    view project

                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* //product details section end*/}

          {/* EnquireModal */}
          {/* <Modal open={open} onClose={onCloseModal} center id="">
            <div className="flex productM">
              <div className="productMImg">
                <img
                  src="/images/Ast/contact-title-image.png"
                  alt="forgotpassword"
                />
              </div>
              <form id="review" onSubmit={submitHandler}>
                <div className="login__content flex">
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
                    type="phone"
                    id="name_field"
                    placeholder="Mobile No. "
                    className="form-control mb-4 "
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
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
                  <input
                    type="text"
                    id="name_field"
                    placeholder="Your Place "
                    className="form-control mb-4 "
                    value={place}
                    required
                    onChange={(e) => setPlace(e.target.value)}
                  />
                  <textarea
                    rows="3"
                    type="text"
                    id="message_field"
                    placeholder="Message"
                    className="form-control mb-4"
                    value={note}
                    required
                    onChange={(e) => setNote(e.target.value)}
                  />
                  <div className="create__ac review flex">
                    <button
                      className="btn-success"
                      onClick={onCloseModal}
                      type="submit"
                      disabled={loading ? true : false}
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Modal> */}

          {/* explore more section start */}
          <section className="more__product">
            <h1>Explore more</h1>
            <div className="more__Pdt">
              {
                products?.map((product, key) => (
                  <Fragment key={key}>
                    {product?._id !== productId ? (
                      <div className="img__wrap">
                        <Link to={`/product/${product._id}`}>
                          <img
                            src={
                              product.images[0]
                                ? `${process.env.REACT_APP_BASE_URL}${product.images[0].url}`
                                : "/images/others/default_product.png"
                            }
                            alt={product.name}
                          />

                          <h1>{product.name}</h1>
                          {/* <p>
                            {systemSettings && systemSettings.defaultCurrency}
                            {product.priceTypes[0].unitPrice}
                          </p> */}
                        </Link>
                      </div>
                    ) : (
                      <></>
                    )}
                  </Fragment>
                ))}
            </div>
          </section>
          {/* explore more section end */}
          <ContactUs />

          <Footer />
        </>
      )}
    </>
  );
};

export default SingleProduct;

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className="arrow__wrap">
      <RiArrowLeftSLine
        className={"react__arrowPrev"}
        onClick={onClick}
        style={{ ...style, display: "block", zIndex: "8", color: "black" }}
      />
    </div>
  );
}
function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className="arrow__wrap rt">
      <RiArrowRightSLine
        className={"react__arrowNext"}
        style={{ ...style, display: "block", zIndex: "8", color: "black" }}
        onClick={onClick}
      />
    </div>
  );
}
