import React from 'react'
import { Link } from "react-router-dom"
import { FiArrowUpRight } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiQuestionLine } from "react-icons/ri";
import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import MetaData from "../../layout/MetaData"
import ContactUs from '../ContactFrom/ContactUs';

const ServiceLayout = ({
    title,
    description,
    heroSvg,
    children,
    uqeAboutus,
}) => {
    return (<>
        <MetaData
            title={title}
            content={description}
            keyword={title}
        />
        <NavBar />

        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">
                            {title}

                            <br /> Development
                        </h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">
                            {description}
                        </h2>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <div className="text-center text-lg-start">
                                <Link to="#!"
                                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                                >
                                    <span>Start your Project</span>
                                    <FiArrowUpRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 hero-img"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                    >
                        {heroSvg}
                    </div>
                </div>
            </div>
        </section>
        <main id="main">
            <section id="clients" className="clients clients">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6">
                            <img
                                src="/images/osperb/clients/client-01.png"
                                className="img-fluid"
                                alt=""
                                data-aos="zoom-in"
                            />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img
                                src="/images/osperb/clients/client-02.png"
                                className="img-fluid"
                                alt=""
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img
                                src="/images/osperb/clients/client-03.png"
                                className="img-fluid"
                                alt=""
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img
                                src="/images/osperb/clients/client-04.png"
                                className="img-fluid"
                                alt=""
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img
                                src="/images/osperb/clients/client-03.png"
                                className="img-fluid"
                                alt=""
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img
                                src="/images/osperb/clients/client-01.png"
                                className="img-fluid"
                                alt=""
                                data-aos="zoom-in"
                                data-aos-delay="500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>About Us</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                            {uqeAboutus}
                        </div>
                        <div
                            className="col-lg-6 pt-4 pt-lg-0"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
                            <Link to="#!" className="btn-learn-more">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionProcess">
                <div className="container">
                    <div className="processIcon">
                        <h2 className="hoverBlue">Our Process</h2>
                        <div className="opicon">
                            <div className="opIconItem">
                                <div className="circleText">1</div>
                                <div className="opext">Business Requirements</div>
                            </div>
                            <div className="opIconItem">
                                <div className="circleText">2</div>
                                <div className="opext">Development</div>
                            </div>
                            <div className="opIconItem">
                                <div className="circleText">3</div>
                                <div className="opext">QA Processes</div>
                            </div>
                            <div className="opIconItem">
                                <div className="circleText">4</div>
                                <div className="opext">Deployment to App Store</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="ourSkill">
                        <div className="ourSkillRight">
                            <h4>Our Skills</h4>
                            <ul typeof="circle">
                                <li>Creative Direction</li>
                                <li>Product Development Strategy</li>
                                <li>Mobile App marketplace strategy</li>
                                <li>Mobile App Full Stack Development</li>
                                <li>Application Solutions</li>
                            </ul>
                        </div>
                        <div className="ourSkillLeft">
                            <h4>Tools We Use</h4>
                            <span>Mobile Framework</span>
                            <div className="iconGrid">
                                <img
                                    src="https://assets.website-files.com/60d15e5cb43b92e332dcee8a/6175b38ee70dd0a66c63d4f5_react-native%20(1).png"
                                    loading="lazy"
                                    width="49"
                                    alt=""
                                    className="icon-tool"
                                />
                                <img
                                    src="https://assets.website-files.com/60d15e5cb43b92e332dcee8a/6175b3953fdc2301154c1d16_flutter%20(1).png"
                                    loading="lazy"
                                    width="49"
                                    alt=""
                                    className="icon-tool"
                                />
                            </div>
                            <span>Other Tools</span>
                            <div className="iconGrid">
                                <img
                                    src="https://assets.website-files.com/60d15e5cb43b92e332dcee8a/60da944e8ae7415a6c562fa9_javascript-2752148-2284965%201.png"
                                    loading="lazy"
                                    width="49"
                                    alt=""
                                    className="icon-tool"
                                />
                                <img
                                    src="https://assets.website-files.com/60d15e5cb43b92e332dcee8a/60da996470cb029866854fad_Typescript_logo_2020%204.png"
                                    loading="lazy"
                                    width="49"
                                    alt=""
                                    className="icon-tool"
                                />
                                <img
                                    src="https://assets.website-files.com/60d15e5cb43b92e332dcee8a/60da9964300a5e6a20357c18_Typescript_logo_2020%207.png"
                                    loading="lazy"
                                    width="49"
                                    alt=""
                                    className="icon-tool"
                                />
                                <img
                                    src="https://assets.website-files.com/60d15e5cb43b92e332dcee8a/60da9964c8c2e5e805bab551_Typescript_logo_2020%206.png"
                                    loading="lazy"
                                    width="49"
                                    alt=""
                                    className="icon-tool"
                                />
                                <img
                                    src="https://assets.website-files.com/60d15e5cb43b92e332dcee8a/6175b4851080dfaa659fa14a_angular%20(1).png"
                                    loading="lazy"
                                    width="49"
                                    alt=""
                                    className="icon-tool"
                                />
                            </div>
                            <Link to="/technologies" className="btn-get-started ">
                                <span>More Technologies</span>
                                <FiArrowUpRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="counts" className="counts">
                <div className="container">
                    <div className="row">
                        <div
                            className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                            data-aos="fade-right"
                            data-aos-delay="150"
                        >
                            <img src="/images/osperb/counts-img.svg" alt="" className="img-fluid" />
                        </div>

                        <div
                            className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div className="content d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-emoji-smile"></i>
                                            <span
                                                data-purecounter-start="0"
                                                data-purecounter-end="65"
                                                data-purecounter-duration="1"
                                                className="purecounter"
                                            ></span>
                                            <p>
                                                <strong>Happy Clients</strong> consequuntur voluptas
                                                nostrum aliquid ipsam architecto ut.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-journal-richtext"></i>
                                            <span
                                                data-purecounter-start="0"
                                                data-purecounter-end="85"
                                                data-purecounter-duration="1"
                                                className="purecounter"
                                            ></span>
                                            <p>
                                                <strong>Projects</strong> adipisci atque cum quia
                                                aspernatur totam laudantium et quia dere tan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-clock"></i>
                                            <span
                                                data-purecounter-start="0"
                                                data-purecounter-end="18"
                                                data-purecounter-duration="1"
                                                className="purecounter"
                                            ></span>
                                            <p>
                                                <strong>Years of experience</strong> aut commodi
                                                quaerat modi aliquam nam ducimus aut voluptate non vel
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-award"></i>
                                            <span
                                                data-purecounter-start="0"
                                                data-purecounter-end="15"
                                                data-purecounter-duration="1"
                                                className="purecounter"
                                            ></span>
                                            <p>
                                                <strong>Awards</strong> rerum asperiores dolor alias
                                                quo reprehenderit eum et nemo pad der
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="hoverBlue">Services</h2>
                        <p>
                            Magnam dolores commodi suscipit eius consequatur ex aliquid fug
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon">
                                    <i className="bx bxl-dribbble"></i>
                                </div>
                                <h4 className="title">
                                    <Link to="#!">Software Development</Link>
                                </h4>
                                <p className="description">
                                    Voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias excepturi
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon">
                                    <i className="bx bx-file"></i>
                                </div>
                                <h4 className="title">
                                    <Link to="#!">Mobile App Development</Link>
                                </h4>
                                <p className="description">
                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon">
                                    <i className="bx bx-tachometer"></i>
                                </div>
                                <h4 className="title">
                                    <Link to="#!">Website Development</Link>
                                </h4>
                                <p className="description">
                                    Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon">
                                    <i className="bx bx-world"></i>
                                </div>
                                <h4 className="title">
                                    <Link to="#!">ERP Development</Link>
                                </h4>
                                <p className="description">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus
                                    qui blanditiis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="more-services" className="more-services">
                <div className="container">
                    <h4 className="title">
                        <Link to="#!">More services</Link>
                    </h4>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div
                                className="card"
                                style={{ backgroundImage: "url(/images/osperb/more-services-1.png)" }}
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to="#!">Social media marketing</Link>
                                    </h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur elit, sed do
                                        eiusmod tempor ut labore et dolore magna aliqua.
                                    </p>
                                    <div className="read-more">
                                        <Link to="#!">
                                            <i className="bi bi-arrow-right"></i> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div
                                className="card"
                                style={{ backgroundImage: "url(/images/osperb/more-services-2.png)" }}

                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to="#!">Designing</Link>
                                    </h5>
                                    <p className="card-text">
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem doloremque laudantium, totam rem.
                                    </p>
                                    <div className="read-more">
                                        <Link to="#!">
                                            <i className="bi bi-arrow-right"></i> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch mt-4">
                            <div
                                className="card"
                                style={{ backgroundImage: "url(/images/osperb/more-services-3.png)" }}

                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to="#!">Nive Lodo</Link>
                                    </h5>
                                    <p className="card-text">
                                        Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                                        fugit, sed quia magni dolores.
                                    </p>
                                    <div className="read-more">
                                        <Link to="#!">
                                            <i className="bi bi-arrow-right"></i> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch mt-4">
                            <div
                                className="card"
                                style={{ backgroundImage: "url(/images/osperb/more-services-1.png)" }}

                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to="#!">Pale Treda</Link>
                                    </h5>
                                    <p className="card-text">
                                        Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                                        quisquam laudantium voluptatem.
                                    </p>
                                    <div className="read-more">
                                        <Link to="#!">
                                            <i className="bi bi-arrow-right"></i> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="features">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="hoverBlue">Features</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="300">
                        <div className="col-lg-3 col-md-4">
                            <div className="icon-box">
                                <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                                <h3>
                                    <Link to="#!">Lorem Ipsum</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i
                                    className="ri-bar-chart-box-line"
                                    style={{ color: "#5578ff" }}
                                ></i>
                                <h3>
                                    <Link to="#!">Dolor Sitema</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i
                                    className="ri-calendar-todo-line"
                                    style={{ color: "#e80368" }}
                                ></i>
                                <h3>
                                    <Link to="#!">Sed perspiciatis</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i
                                    className="ri-paint-brush-line"
                                    style={{ color: "#e361ff" }}
                                ></i>
                                <h3>
                                    <Link to="#!">Magni Dolores</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i
                                    className="ri-database-2-line"
                                    style={{ color: "#47aeff" }}
                                ></i>
                                <h3>
                                    <Link to="#!">Nemo Enim</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i
                                    className="ri-gradienter-line"
                                    style={{ color: "#ffa76e" }}
                                ></i>
                                <h3>
                                    <Link to="#!">Eiusmod Tempor</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i
                                    className="ri-file-list-3-line"
                                    style={{ color: "#11dbcf" }}
                                ></i>
                                <h3>
                                    <Link to="#!">Midela Teren</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i
                                    className="ri-price-tag-2-line"
                                    style={{ color: "#4233ff" }}
                                ></i>
                                <h3>
                                    <Link to="#!">Pira Neve</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                                <h3>
                                    <Link to="#!">Dirada Pack</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
                                <h3>
                                    <Link to="#!">Moton Ideal</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i
                                    className="ri-base-station-line"
                                    style={{ color: "#ff5828" }}
                                ></i>
                                <h3>
                                    <Link to="#!">Verdo Park</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i
                                    className="ri-fingerprint-line"
                                    style={{ color: "#29cc61" }}
                                ></i>
                                <h3>
                                    <Link to="#!">Flavor Nivelanda</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="team" className="team section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Team</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img
                                        src="/images/osperb/testimonials/testimonials-1.jpg"

                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="social">
                                        <Link to="#!">
                                            <FaTwitter />
                                        </Link>
                                        <Link to="#!">
                                            <FaFacebook />
                                        </Link>
                                        <Link to="#!">
                                            <FaInstagram />
                                        </Link>
                                        <Link to="#!">
                                            <FaLinkedin />
                                        </Link>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                <div className="member-img">
                                    <img
                                        src="/images/osperb/testimonials/testimonials-2.jpg"

                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="social">
                                        <Link to="#!">
                                            <FaTwitter />
                                        </Link>
                                        <Link to="#!">
                                            <FaFacebook />
                                        </Link>
                                        <Link to="#!">
                                            <FaInstagram />
                                        </Link>
                                        <Link to="#!">
                                            <FaLinkedin />
                                        </Link>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                <div className="member-img">
                                    <img
                                        src="/images/osperb/testimonials/testimonials-3.jpg"

                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="social">
                                        <Link to="#!">
                                            <FaTwitter />
                                        </Link>
                                        <Link to="#!">
                                            <FaFacebook />
                                        </Link>
                                        <Link to="#!">
                                            <FaInstagram />
                                        </Link>
                                        <Link to="#!">
                                            <FaLinkedin />
                                        </Link>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                <div className="member-img">
                                    <img
                                        src="/images/osperb/testimonials/testimonials-4.jpg"

                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="social">
                                        <Link to="#!">
                                            <FaTwitter />
                                        </Link>
                                        <Link to="#!">
                                            <FaFacebook />
                                        </Link>
                                        <Link to="#!">
                                            <FaInstagram />
                                        </Link>
                                        <Link to="#!">
                                            <FaLinkedin />
                                        </Link>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



            <section id="faq" className="faq">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="hoverBlue">Frequently Asked Questions</h2>
                    </div>

                    <div
                        className="row faq-item d-flex align-items-stretch"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="col-lg-5">
                            <RiQuestionLine />
                            <h4>Non consectetur a erat nam at lectus urna duis?</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                                magna fringilla urna porttitor rhoncus dolor purus non.
                            </p>
                        </div>
                    </div>

                    <div
                        className="row faq-item d-flex align-items-stretch"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="col-lg-5">
                            <RiQuestionLine />

                            <h4>
                                Feugiat scelerisque varius morbi enim nunc faucibus a
                                pellentesque?
                            </h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Dolor sit amet consectetur adipiscing elit pellentesque
                                habitant morbi. Id interdum velit laoreet id donec ultrices.
                                Fringilla phasellus faucibus scelerisque eleifend donec
                                pretium. Est pellentesque elit ullamcorper dignissim.
                            </p>
                        </div>
                    </div>

                    <div
                        className="row faq-item d-flex align-items-stretch"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="col-lg-5">
                            <RiQuestionLine />

                            <h4>
                                Dolor sit amet consectetur adipiscing elit pellentesque
                                habitant morbi?
                            </h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                                sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                                nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                                pellentesque eu tincidunt. Lectus urna duis convallis
                                convallis tellus.
                            </p>
                        </div>
                    </div>

                    <div
                        className="row faq-item d-flex align-items-stretch"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="col-lg-5">
                            <RiQuestionLine />

                            <h4>
                                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                            </h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Aperiam itaque sit optio et deleniti eos nihil quidem cumque.
                                Voluptas dolorum accusantium sunt sit enim. Provident
                                consequuntur quam aut reiciendis qui rerum dolorem sit odio.
                                Repellat assumenda soluta sunt pariatur error doloribus fuga.
                            </p>
                        </div>
                    </div>

                    <div
                        className="row faq-item d-flex align-items-stretch"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <div className="col-lg-5">
                            <RiQuestionLine />

                            <h4>
                                Tempus quam pellentesque nec nam aliquam sem et tortor
                                consequat?
                            </h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Molestie a iaculis at erat pellentesque adipiscing commodo.
                                Dignissim suspendisse in est ante in. Nunc vel risus commodo
                                viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                                bibendum est. Purus gravida quis blandit turpis cursus in
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactUs />
            {/* <section id="contact" className="contact" style={{ paddingBottom: "2rem" }}>
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Contact Us</h2>
                    </div>


                    <div className="row">
                        <div
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="contact-about">
                                <h3>Osperb</h3>
                                <p>
                                    Cras fermentum odio eu feugiat. Justo eget magna fermentum
                                    iaculis eu non diam phasellus. Scelerisque felis imperdiet
                                    proin fermentum leo. Amet volutpat consequat mauris nunc
                                    congue.
                                </p>
                                <div className="social-links">
                                    <Link to="#!">
                                        <FaTwitter />
                                    </Link>
                                    <Link to="#!">
                                        <FaFacebook />
                                    </Link>
                                    <Link to="#!">
                                        <FaInstagram />
                                    </Link>
                                    <Link to="#!">
                                        <FaLinkedin />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-6 mt-4 mt-md-0"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="info">
                                <div>
                                    <i className="ri-map-pin-line"></i>
                                    <p>
                                        Daliya KPees Avenue
                                        <br />
                                        Up Hill, Malappuram
                                    </p>
                                </div>

                                <div>
                                    <i className="ri-mail-send-line"></i>
                                    <p>info@example.com</p>
                                </div>

                                <div>
                                    <i className="ri-phone-line"></i>
                                    <p>+91 095263 30055</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-5 col-md-12"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <form
                                action="forms/contact.php"
                                method="post"

                                className="php-email-form"
                            >
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows="5"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
        <Footer />

    </>)
}

export default ServiceLayout
