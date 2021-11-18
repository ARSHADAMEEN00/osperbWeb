import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// react icons
import { FaPhoneVolume } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

// Backend Imports
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../actions/userActions";

import { getCategories } from "../../actions/categoryActions";
import { getProducts } from "../../actions/productActions";
import { loadSettings } from "../../actions/settingsActions";
import { Navbar } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const NavBar = ({ homepg, BrownTheme }) => {
  // state for  navbar scroll change update
  const [scroll, setScroll] = useState(false);

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  const { suggestedProducts, products } = useSelector(
    (state) => state.products
  );

  const { categories } = useSelector((state) => state.categories);

  const Doors = categories[1]?._id;
  const Windows = categories[0]?._id;
  useEffect(() => {
    dispatch(getCategories());

    if (!suggestedProducts) {
      dispatch(getProducts());
    }
    dispatch(loadSettings());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    const scrollListener = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else if (window.scrollY <= 100) {
        setScroll(true);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [dispatch, alert, isAuthenticated, isLoggedIn, error, suggestedProducts]);

  const Icon = () => {
    return (
      <div className="arrow_wrapper">
        <BiChevronDown className="down" />
        <BiChevronUp className="up" />
      </div>
    );
  };


  return (
    <>
      {/* NAVBAR START */}
      <div
        className={` navbar_wrap ${homepg && "home"} ${scroll === true && "active"
          } ${BrownTheme && "navBrown"}`}
      >
        <div className="row nav_row">
          <div className="col-md-3 col-4 layamer_logo flex">
            <Link to="/" className="layamer_logo_wrap">
              <h1>Osperb</h1>
              <div><IoIosArrowBack />  hi there <IoIosArrowForward /> </div>
            </Link>
          </div>

          <div className="col-md-6 col-4 navbar_icon_gp flex">
            <ul className="menu__bar_ul main">
              <Link to="/">
                <li>Home</li>
              </Link>
              {categories && (
                <li className="nav-link">
                  <Link to="/category/doors">{categories[0]?.name}</Link>
                  <Icon />
                  <div className="mega-drop drop___container">
                    <div className="content drop___content">
                      <ul className="mega-link">
                        {products &&
                          products?.map((product, index) => (
                            <Fragment key={index}>
                              {product?.category && (
                                <Link
                                  to={`/product/${product._id}`}
                                  key={index}
                                >
                                  <li>{product.name}</li>
                                </Link>
                              )}
                            </Fragment>
                          ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )}
              {/* {categories && (
                <li className="nav-link">
                  <Link to="/category/windows">Windows</Link>
                  <Icon />
                  <div className="mega-drop drop___container">
                    <div className="content drop___content">
                      <ul className="mega-link">
                        {products &&
                          products?.map((product, index) => (
                            <Fragment key={index}>
                              {product?.category === Windows && (
                                <Link
                                  to={`/product/${product._id}`}
                                  key={index}
                                >
                                  <li>{product.name}</li>
                                </Link>
                              )}
                            </Fragment>
                          ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )} */}

              <Link to="/about">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="col-md-3 col-4 bars_wrap flex">
            <a
              href="tel:+919645700075"
              title="Give me a call"
              className="queries"
            >
              <div className="qu_icon">
                <FaPhoneVolume />
              </div>
              <p>+91 9645700075</p>
            </a>
          </div>
        </div>

        {/* for smaller screen */}
        <Navbar
          className={`row nav__two navShow ${scroll && "actived"}`}
          bg="transperant"
          expand="lg"
        >
          <div className={`nav__wrap ${scroll && "actived"}`}>
            <ul className="menu__bar_ul">
              {categories && (
                <li className="nav-link">
                  <Link to="/category/doors">Doors</Link>
                  <Icon />
                  <div className="mega-drop drop___container">
                    <div className="content drop___content">
                      <ul className="mega-link">
                        {products &&
                          products?.map((product, index) => (
                            <Link to={`/product/${product._id}`} key={index}>
                              <li>{product.name}</li>
                            </Link>
                          ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )}
              {categories && (
                <li className="nav-link">
                  <Link to="/category/windows">{categories[0]?.name}</Link>
                  <Icon />
                  <div className="mega-drop drop___container">
                    <div className="content drop___content">
                      <ul className="mega-link">
                        {products &&
                          products?.map((product, index) => (
                            <Fragment key={index}>
                              {product?.category === Windows && (
                                <Link
                                  to={`/product/${product._id}`}
                                  key={index}
                                >
                                  <li>{product.name}</li>
                                </Link>
                              )}
                            </Fragment>
                          ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )}
              <Link to="/about">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </Navbar>
      </div>
      {/* NAVBAR END */}
    </>
  );
};

export default NavBar;
