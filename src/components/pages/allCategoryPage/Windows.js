import React, { useEffect } from "react";
import Footer from "../../layout/Footer";
import MetaData from "../../layout/MetaData";
import { Link } from "react-router-dom";

import NavBar from "../../layout/NavBar";
import Loader from "../../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  getProducts,
} from "../../../actions/productActions";
import { Fragment } from "react";
import { getCategories } from "../../../actions/categoryActions";
import { useState } from "react";
import ContactUs from "../ContactFrom/ContactUs";

const Windows = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  const { categories } = useSelector((state) => state.categories);

  const Windows = categories[0]?._id


  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories())

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (error) {
      return alert.error(error);
    }
    window.onReload = function () {
      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setScroll(true);
      } else if (window.scrollY <= 400) {
        setScroll(false);
      }
    });

    dispatch(getProducts());
  }, [dispatch, alert, error]);

  const [newScroll, setScroll] = useState(false);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="windows" />
          <NavBar BrownTheme />
          <section className="product__scarf" id="windos_section">
            <section className="mail_section windo alptd flex">
              <img
                alt="Steel window in kerala"
                src="/images/Loha/steel-doors-and-windows.jpg"
              />

              <div className="fade__bg fade__bg_product">
                <label htmlFor="">
                  <h4>Choose the perfect window style to match your home</h4>
                </label>
              </div>
            </section>
            <div className="product_list">
              {/* product cards section start */}
              <section className="scraf__section" id="project_section">
                <div className="card__contianer center_align">

                  {products?.map((product, index) => (
                    <Fragment key={index}>
                      {product?.category === Windows && (
                        <div className="project_slider">
                          <div className="project_img img_zoom" >
                            <Link to={`/product/${product._id}`}>
                              <img
                                src={`${process.env.REACT_APP_BASE_URL}${product?.images[0]?.url}`}
                                alt={product?.name}

                              />
                            </Link>
                          </div>
                          <div className="img_title">
                            <div className="product_link">
                              <Link to={`/product/${product._id}`} className="">{product.name}</Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </Fragment>
                  ))}

                </div>
              </section>
              {/* product cards section end */}
            </div>
          </section>
          <ContactUs />

          <Footer />
          {/* <a href="https://wa.me/+919645700075?title=LOHA20%STEELS" className={` fixed_btn scroll-to-top ${newScroll === true && "show"} blink`}>
            <button id="chat-btn" className="w_button  btn btn-success">
              <img src="/images/others/Whatsapp2.svg" alt="whasapp" />
              <span>Chat</span>
            </button>
          </a> */}
        </>
      )}
    </>
  );
};

export default Windows;
