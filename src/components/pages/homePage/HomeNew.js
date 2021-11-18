import React from "react";
// import moment from "moment";

import Slider from "react-slick";
// import GoogleMap from "../ContactFrom/GoogleMap";
// import { Parallax, Layer, AppearLayer } from 'react-scroll-parallax';
// import { RiHomeGearLine, RiSurroundSoundLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropright } from "react-icons/io";
// import { MdSettingsInputComposite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
// import { IoMdArrowDropright } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { ImQuotesRight } from "react-icons/im";
// import { Modal } from "react-responsive-modal";
// import { GiElectric } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { motion } from "framer-motion";

import { getProducts } from "../../../actions/productActions";
import { getBlogs } from "../../../actions/blogActions";
import { getTestimonials } from "../../../actions/testimonialActions";
import { getProjects } from "../../../actions/projectActions";
import { getCategories } from "../../../actions/categoryActions";

import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import ContactUs from "../../pages/ContactFrom/ContactUs"
import ContactFrom from "../ContactFrom/ContactFrom";
import MetaData from "../../layout/MetaData";
import Loader from "../../layout/Loader";
import MobileAnime from "../../layout/animation/MobileAnime";
import WebsiteAnime from "../../layout/animation/WebsiteAnime";
import SoftwearAnime from "../../layout/animation/SoftwearAnime";

import "react-responsive-modal/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homeNew.css";
import { BsArrowDownRight } from "react-icons/bs";
import ParallaxSection from "./ParallaxSection";
import {
  useViewportScroll,
  useTransform,
} from 'framer-motion';
import moment from "moment";
import Modal from "react-responsive-modal";


function HomeNew({ history }) {
  const [isMobile, setIsMobile] = useState(false);

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 0], [0, 0]);
  const y2 = useTransform(scrollY, [0, 300], [0, -300]);
  const y3 = useTransform(scrollY, [0, 600], [0, -600]);
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  });

  window.onReload = function () {
    window.scrollTo(0, 0);
  };

  // modal
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const alert = useAlert();
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  const categoryOne = categories[0]; //windows
  const categoryTwo = categories[1]; //doors

  const { loading, error, products, featuredProducts } = useSelector((state) => state.products);

  const {
    error: testimonialError,
    testimonials,
    testimonialsCount,
  } = useSelector((state) => state.testimonials);

  const { blogs } = useSelector((state) => state.blogs);

  const { projects } = useSelector((state) => state.projects);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    let timer1 = setTimeout(() => onOpenModal(), 5000);
    setTimeout(timer1);

    dispatch(getTestimonials());
    dispatch(getBlogs());
    dispatch(getProjects());
    dispatch(getCategories());

    if (error) {
      return alert.error(error);
    }

    if (testimonialError) {
      return alert.error(testimonialError);
    }

    if (!products) {
      dispatch(getProducts());
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

    return () => {
      clearTimeout(timer1);
    };
  }, [dispatch, alert, error, products, testimonialError]);

  // Frontend --------------------------------

  // slider options
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const ProjectSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    centerPadding: "10%",
    pauseOnHover: false,
    lazyLoad: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => <ul>{dots}</ul>,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const BlogSettings = {
    prevArrow: <PrevBgArrow />,
    nextArrow: <NextBgArrow />,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "3%",
    pauseOnHover: false,
    lazyLoad: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const TextVariance = {
    hidden: {
      x: "-50vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.55,
        stiffness: 100,
        delay: 0.4,
      },
    },
  };

  const [newScroll, setScroll] = useState(false);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData
            title={"Home"}
            name={"description"}
            content={"loha steel"}
          />
          <NavBar homepg />

          {/* modal satrt */}
          <Modal open={open} onClose={onCloseModal} center id="new_modal">
            <ContactFrom isHidden isModal setOpen={setOpen} />
          </Modal>
          {/* modal end */}

          {/* HERO SECTION START */}

          <section className="hero_section">
            <div className="hero__slider" id="main_slider">
              <div className="staticText">We Create,</div>
              <Slider {...settings}>
                <div className="slider_content_one">
                  <p>
                    Design things, e tenetur officiis similique culpa iste quia
                  </p>
                </div>
                <div className="slider_content_one">
                  <p>
                    are coders Lorem ipsum dolor sit amet Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="slider_content_one">
                  <p>
                    make you happy Lorem ipsum dolor sit amet Lorem, ipsum
                    dolor.
                  </p>
                </div>
              </Slider>
            </div>
          </section>

          {/* HERO SECTION END */}

          {/* <section className="section_height flex container">
            <div className="osperb_img col-md-6">
              <img src="/images/osperb/blue_bg.png" alt="" />
            </div>
            <div className="our_prt_content col-md-6">
              <span>
                <h2>About</h2>
              </span>
              <p>
                Loha steel doors and windows offer complete peace of mind to its
                users in terms of price, quality, durability and security. The
                doors are manufactured from high grade steel using
                state-of-the-art technology to ensure supreme resistance to fire
                and other hazards commonly experienced in the case of wooden
                doors. Factory-engineered to perfection, every product is
                uniform in quality and finish; the texture resembles that of
                real wood.
              </p>
            </div>
          </section> */}



          {/* Horizintal section start */}
          <ParallaxSection />

          {/* //works */}
          <section className="removeFree">

            <div className="section featuredPtd padding-t-b--80">
              <div className="">
                <div className="card__contianer center_align">
                  <h3>Our recent works </h3>
                  <div className="row col-lg-12">

                    {featuredProducts &&
                      featuredProducts.map((product, key) => (
                        <div
                          className="column  card_wrap"
                          key={key}
                        >

                          <div className="card__img">

                            <Link
                              to={`/product/${product._id}`}
                              style={{ color: "#bcb5a6" }}
                            >
                              <img
                                src={`${process.env.REACT_APP_BASE_URL}${product?.images[0]?.url}`}

                                alt={product.name}
                              />
                            </Link>
                          </div>

                          {/* {!isMobile && (
                            <> {product.images[1] &&
                              <div className="card__img_second">
                                <Link
                                  to={`/product/${product._id}`}
                                  style={{ color: "#bcb5a6" }}
                                >
                                  <img
                                    src={`${process.env.REACT_APP_BASE_URL}${product?.images[1]?.url}`}
                                    alt="travel"
                                  />
                                </Link>
                              </div>}</>
                          )} */}


                          <div className="product_name_div">
                            <div className="product_name">
                              <Link to={`/product/${product._id}`}>
                                <h4>{product.name}</h4>
                                {/* <p>View</p> */}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>


              </div>
            </div>

            {/* <section className="home__product container section_padding">
            <h1>works</h1>
            <div className="item">
              <div className="single_prt_wrap">
                <div id="sgle_pdt_content">
                  <Link to="/category/doors">{categoryTwo?.name}</Link>
                  <p>{categoryTwo?.description}</p>

                  <div
                    onClick={() => history.push("/category/doors")}
                    id="slidingButton_door"
                    className="btn learn_more_door circle_btn"
                  >
                    <div className="circle_door ">
                      <span className="icon_door arrow_door"></span>
                    </div>
                    <span className="button_text_door">View more</span>
                  </div>
                </div>
                <Link to="/category/doors" className="sgle_prt_img pro_img_one">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}${categoryTwo?.images[0]?.url}`}
                    alt={categoryTwo?.name}
                  />
                </Link>
              </div>
            </div>
            <div className="item two">
              <div className="single_prt_wrap">
                <Link
                  to="/category/window"
                  className="sgle_prt_img pro_img_two"
                >
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}${categoryOne?.images[0]?.url}`}
                    alt={categoryOne?.name}
                  />
                </Link>
                <motion.div id="sgle_pdt_content">
                  <Link to="/category/windows">{categoryOne?.name}</Link>
                  <p>{categoryOne?.description}</p>

                  <div
                    onClick={() => history.push("/category/windows")}
                    id="slidingButton_door"
                    className="btn learn_more_door circle_btn_two"
                  >
                    <div className="circle_door ">
                      <span className="icon_door arrow_door"></span>
                    </div>
                    <span className="button_text_door">View more</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section> */}



            {/* our projuct secction start */}
            {/* 
            {projects?.length > 0 && (
              <section
                id="our_projects"
                className="our_projects testimonial section_padding"
              >
                <h1>Projects</h1>
                <Slider {...ProjectSettings}>
                  {projects?.map((project, index) => (
                    <div className="project_slider" key={index}>
                      <div className="project_img">
                        <Link to="/projects">
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}${project.images[0].url}`}
                            alt={project.name}
                          />
                        </Link>
                      </div>
                      <Link to="/projects" className="img_title">
                        <p>{project.description.substr(0, 100)}</p>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </section>
            )} */}

            {/* our projuct secction end */}

            {/* Blog section start */}
            {/* {blogs?.length > 0 && (
              <section className="Blog_new">
                <div className="fading">
                  <h1>Latest News</h1>
                </div>
                <Slider {...BlogSettings}>
                  {blogs?.map((blog, index) => (
                    <div className="blog_card" key={index}>
                      <h6 className="blog__header">
                        {moment(blog.date).format("DD-MM-YYYY")}
                      </h6>
                      <h1 className="blog__title">{blog.title}</h1>
                      <div className="blog__img">
                        <Link to={`/blog/${blog.subTitle}`}>
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}${blog.images[0].url}`}
                            alt="blogs"
                          />
                        </Link>
                      </div>
                      <Link to={`/blog/${blog.subTitle}`} className="btn mt-2">
                        View details
                        <IoMdArrowDropright />
                      </Link>
                    </div>
                  ))}
                </Slider>
              </section>
            )}
            Blog section end */}

            {/* Testnomials section starts */}

            {/* {testimonials && testimonialsCount > 0 && (
            <section className="product_section">
              <div className="card__contianer center_align newTestMonial">
                <div className="row col-lg-12">
                  <h1 className="h1forTets"> We Make Them Happy </h1>
                  {testimonials?.map((testimonial, key) => (
                    <div className="column col-md-3 col-6 card_wrap" key={key}>
                      <div className="card__img">
                        <Link
                          to={`/product/${testimonial._id}`}
                          style={{ color: "#bcb5a6" }}
                        >
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}${testimonial.images[0]?.url}`}
                            alt={testimonial.name}
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )} */}
            {/* {testimonials && testimonialsCount > 0 && (
              <section className="testimonial section_padding">
                <Slider {...settings}>
                  {testimonials?.map((testimonial, key) => (
                    <div id="tm__slider__wrap" key={key}>
                      <div className="quotation__mark">
                        <ImQuotesRight />
                      </div>
                      <div className="quote__text">
                        <p>{testimonial.message}</p>
                      </div>
                      <div className="tm__images">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}${testimonial.images[0]?.url}`}
                          alt={testimonial.name}
                        />
                      </div>
                      <h1>{testimonial.name}</h1>
                    </div>
                  ))}
                </Slider>
              </section>
            )} */}
            {/* Testnomials section ends */}

            {/* contactForm start */}
            {/* <GoogleMap /> */}
            {/* contactForm end */}
            <ContactUs />

            <Footer home />

            <a
              href="https://wa.me/+919645700075?title=LOHA20%STEELS"
              className={` fixed_btn scroll-to-top ${newScroll === true && "show"
                } blink`}
            >
              <button id="chat-btn" className="w_button  btn btn-success">
                <img src="/images/others/Whatsapp2.svg" alt="whasapp" />
                <span>Chat</span>
              </button>
            </a>
          </section>

        </Fragment>
      )}
    </>
  );
}

export default HomeNew;

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <IoIosArrowBack
      className={"react__arrowPrev"}
      onClick={onClick}
      style={{ ...style, display: "block", zIndex: "8" }}
    />
  );
}
function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <IoIosArrowForward
      className={"react__arrowNext"}
      style={{ ...style, display: "block", zIndex: "8" }}
      onClick={onClick}
    />
  );
}
function PrevBgArrow(props) {
  const { style, onClick } = props;
  return (
    <div className="arrowBgPrev wrap">
      <IoIosArrowBack
        className={"arrowBgPrev"}
        onClick={onClick}
        style={{ ...style, display: "block", zIndex: "8" }}
      />
    </div>
  );
}
function NextBgArrow(props) {
  const { style, onClick } = props;
  return (
    <div className="arrowBgNext wrap">
      <IoIosArrowForward
        className={"arrowBgNext"}
        style={{ ...style, display: "block", zIndex: "8" }}
        onClick={onClick}
      />
    </div>
  );
}
