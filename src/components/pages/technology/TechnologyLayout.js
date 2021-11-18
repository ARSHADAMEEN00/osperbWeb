import React, { Fragment } from 'react'
import { AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowDownRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import MetaData from "../../layout/MetaData"
import "./technology.css";
import { FiArrowUpRight } from 'react-icons/fi';
import ContactUs from '../ContactFrom/ContactUs';

const TechnologyLayout = ({
    title,
    desciption,
    heroImage,
    businessIdea,
    techDescription,
    expertDescription,
    expertImage,
    technologyFeature,
    platforms,
    businessImg,
    benifits,
    technologyUsedby

}) => {
    return (
        <>
            <MetaData
                title={title}
                content={desciption}
            />
            <NavBar />
            <div className="section__technologies-hero">
                <div className="container">
                    <div className="back-button-wrap">
                        <Link
                            data-w-id="ce976294-a950-09d0-2b37-294b4582dd3a"
                            to="/technologies"
                            className="button-text mysass left-icon w-inline-block"
                        >
                            <AiOutlineArrowLeft className="button-text__left-icon" />
                            <div className="button-text__text">Technologies</div>
                        </Link>
                    </div>
                    <div className="technologies__hero-content">
                        <div id="w-node-div-block-4-e0bf05fa" className="grid__column">
                            <h1>
                                {title} Development Services
                                <br />
                            </h1>
                            <p>
                                {desciption}
                            </p>
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
                        <img
                            src={heroImage}
                            loading="lazy"
                            id="w-node-_95486b05-378f-6b3e-be1d-5d83a17f9cd1-85bf0606"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 63vw, 42vw"
                            alt={title}
                            className="technologies__hero-image"
                        />
                    </div>
                </div>
            </div>
            <div className="section padding-t-b--80">
                <div className="container">
                    <div className="section__heading-wrap">
                        <h2>
                            Implementing your business idea
                            <br />
                        </h2>
                    </div>
                    <div className="grid__3-column">
                        {businessIdea?.map((item, index) => (

                            <div className="technologies-feature-item" key={index}>
                                <div className="technologies-feature-item__header-wrap">
                                    <h3 className="technologies-feature-item__heading">
                                        {item.heading}
                                    </h3>
                                    <img
                                        src={item.url}
                                        loading="lazy"
                                        alt=""
                                        className="technologies-feature-item__icon mysass "
                                    />



                                </div>
                                <p className="technologies-feature-item__text">
                                    {item.content}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className="section padding-t-b--80">
                <div className="container">
                    <img
                        src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60391d53270673c45ff1a4cf_node-js-hire-illustration-01.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 380px, (max-width: 991px) 46vw, 380px"
                        srcset="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60391d53270673c45ff1a4cf_node-js-hire-illustration-01-p-500.png 500w, https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60391d53270673c45ff1a4cf_node-js-hire-illustration-01.png 760w"
                        alt=""
                        className="our-capabilities__image"
                    />
                    <div className="grid__2-column margin-t--80">

                        <div className="technologies-description__content-wrap">
                            <h2 className="technologies-description__heding">
                                The experts in {title} Development
                                <br />
                            </h2>
                            <p>
                                {expertDescription}
                            </p>
                        </div>
                        <div className="technologies-description__images-column">
                            <div className="technologies-description__images-wrap">
                                {expertImage?.map((item, index) => (<div key={index} className={`technologies-description__image-${item.id}-wrap`}>
                                    <img
                                        src={item.url}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 45vw, 300px"
                                        alt={title}
                                        className={`technologies-description__image-${item.id}`}
                                    />
                                </div>))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section padding-t-b--80">
                <div className="container">
                    <div className="section__heading-wrap">
                        <h2>
                            Solutions we build with {title}
                            <br />
                        </h2>
                    </div>
                    <div className="grid__3-column">
                        {technologyFeature?.map((item, index) => (<div className="technologies-feature-item">
                            <div key={index} className="technologies-feature-item__header-wrap">
                                <h3 className="technologies-feature-item__heading">
                                    <strong>{item.heading}</strong>
                                </h3>
                                <img
                                    src={item.url}
                                    loading="lazy"
                                    alt={item.heading}
                                    className="technologies-feature-item__icon mysass"
                                />
                            </div>
                            <p className="technologies-feature-item__text">
                                {item.content}
                            </p>
                        </div>))}

                    </div>
                </div>
            </div>
            <div className="section padding-t-b--80 cc--n2">
                <div className="container">
                    {platforms?.map((item, index) => (
                        <div className="grid__2-column" key={index}>
                            <div className="grid__column">
                                <h3>
                                    {item.heading}
                                </h3>
                                <p>{item.content}</p>
                            </div>
                            <div className="grid__column">
                                <div className="platforms-logos__grid">
                                    {item.images?.map((img, index) => (
                                        <div key={index} className="platforms-logos__item">
                                            <img
                                                src={img.url}
                                                loading="lazy"
                                                alt={img.title}
                                                className="platforms-logos__logo"
                                            />
                                            <div className="platforms-logos__name">
                                                {img.title}
                                                <br />
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
            <div className="section padding-t-b--80">
                <div className="container">
                    <div className="grid__2-column">
                        <div className="grid__column">
                            <div className="section__heading-wrap">
                                <h2>
                                    Integrate your business
                                    <br />
                                </h2>
                                <p>
                                    Custom APIs or 3rd party integrations are implemented by our
                                    practitioners, covering social networks, payment systems,
                                    mapping systems, CRMs and business tools.
                                    <br />
                                </p>
                            </div>
                            <div className="technologies-feature-item">
                                <div className="technologies-feature-item__header-wrap">
                                    <h3 className="technologies-feature-item__heading">
                                        Custom API development
                                    </h3>
                                    <img
                                        src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a12c198e2d8f248177_code-green.svg"
                                        loading="lazy"
                                        alt={title}
                                        className="technologies-feature-item__icon mysass"
                                    />
                                </div>
                                <p className="technologies-feature-item__text">
                                    We are improving different human capabilities in our projects
                                    by integration of new technologies and internal tools.
                                </p>
                            </div>
                            <div className="technologies-feature-item">
                                <div className="technologies-feature-item__header-wrap">
                                    <h3 className="technologies-feature-item__heading">
                                        3rd party integration
                                    </h3>
                                    <img
                                        src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a1c478049f3995ca73_extension-green.svg"
                                        loading="lazy"
                                        alt={title}
                                        className="technologies-feature-item__icon mysass"
                                    />
                                </div>
                                <p className="technologies-feature-item__text">
                                    The development team of COAX, can integrate virtually any API
                                    into your application, including legacy SOAP ones. Our custom
                                    integration solutions leave external API calls outside the
                                    main request/response flow, ensuring ultimate performance and
                                    enriching the necessary 3D party data for web applications,
                                    delivering timely results that your users expect.
                                </p>
                            </div>
                        </div>
                        <div className="grid__column align-center">
                            <img
                                src={businessImg}
                                loading="lazy"
                                style={{ cursor: 'default' }}

                                alt={title}
                                className="technologies-image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section padding-t-b--80">
                <div className="container">
                    <div className="section__heading-wrap">
                        <h2>
                            Why Us
                            <br />
                        </h2>
                    </div>
                    <div className="grid__2-column">
                        <div className="technologies-feature-item-3">
                            <div className="technologies-feature-item-3__header-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a11b418975d2b609b9_check-r-blue.svg"
                                    loading="lazy"
                                    alt=""
                                    className="technologies-feature-item-3__icon"
                                />
                                <h3 className="technologies-feature-item-3__heading">
                                    Errorless
                                </h3>
                            </div>
                            <p>
                                In coding, our development team is accurate and precise, and our
                                QA engineers have zero bug tolerance. We make sure that the
                                final product matches the documentation of the requirements
                            </p>
                        </div>
                        <div className="technologies-feature-item-3">
                            <div className="technologies-feature-item-3__header-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2d8f11a91890bdd2e_support-blue.svg"
                                    loading="lazy"
                                    alt=""
                                    className="technologies-feature-item-3__icon"
                                />
                                <h3 className="technologies-feature-item-3__heading">
                                    Post-release support
                                </h3>
                            </div>
                            <p>
                                Our development team will be there even after the project is
                                done to eliminate the problem that could occur within the
                                product.
                            </p>
                        </div>
                        <div className="technologies-feature-item-3">
                            <div className="technologies-feature-item-3__header-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602d01f871c9d0292d34152b_arrow-long-right.svg"
                                    loading="lazy"
                                    alt=""
                                    className="technologies-feature-item-3__icon"
                                />
                                <h3 className="technologies-feature-item-3__heading">
                                    Working
                                </h3>
                            </div>
                            <p>
                                We can adjust our working hours depending on where you are, to
                                ensure that we overlap with your time zone.
                            </p>
                        </div>
                        <div className="technologies-feature-item-3">
                            <div className="technologies-feature-item-3__header-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/604641880fc7a532d7d573df_legal2.svg"
                                    loading="lazy"
                                    alt=""
                                    className="technologies-feature-item-3__icon"
                                />
                                <h3 className="technologies-feature-item-3__heading">
                                    Legal protection
                                </h3>
                            </div>
                            <p>
                                We sign the NDA to ensure that there is no risk of unauthorized
                                use of any project data in order to ensure the confidentiality
                                of our customer information.
                            </p>
                        </div>
                        <div className="technologies-feature-item-3">
                            <div className="technologies-feature-item-3__header-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/604641880fc7a532d7d573df_legal2.svg"
                                    loading="lazy"
                                    alt=""
                                    className="technologies-feature-item-3__icon"
                                />
                                <h3 className="technologies-feature-item-3__heading">
                                    Intelectual property rights
                                </h3>
                            </div>
                            <p>
                                All the rights to the software developed by our programmers are
                                100% owned by the client.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section padding-t-b--80">
                <div className="container">

                    <div className="section__heading-wrap margin-t--80">
                        <h2>
                            What makes us different?
                            <br />
                        </h2>
                    </div>
                    <div className="grid__4-column">
                        <div className="technologies-feature-item-2">
                            <img
                                src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2f6c4e8216502cbfd_users-solid-blue.svg"
                                loading="lazy"
                                alt=""
                                className="technologies-feature-item-2__icon sass "
                            />
                            <h3 className="technologies-feature-item-2__heading">
                                Wide selection of experts
                            </h3>
                            <p className="technologies-feature-item-2__text">
                                On-site talents, off-site collaborators and top software tools
                                are combined in our network. We will pick tech superstars
                                perfectly suited to the culture, industry and technology of your
                                company
                            </p>
                        </div>
                        <div className="technologies-feature-item-2">
                            <img
                                src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a18f26e171ac8de922_arrow-top-right-r-blue.svg"
                                loading="lazy"
                                alt=""
                                className="technologies-feature-item-2__icon sass"
                            />
                            <h3 className="technologies-feature-item-2__heading">
                                Approach of Hypergrowth
                            </h3>
                            <p className="technologies-feature-item-2__text">
                                It is not our goal to simply deliver the project. We will help
                                you establish an environment of hyper-growth around your
                                technology and your brand
                            </p>
                        </div>
                        <div className="technologies-feature-item-2">
                            <img
                                src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2d8f11a91890bdd2e_support-blue.svg"
                                loading="lazy"
                                alt=""
                                className="technologies-feature-item-2__icon sass"
                            />
                            <h3 className="technologies-feature-item-2__heading">
                                Company support from Hillistic
                            </h3>
                            <p className="technologies-feature-item-2__text">
                                Even the best code is only a component of success. From project
                                managers and strategy consultants to sales and marketing
                                experts, we will provide you with an interdisciplinary team of
                                tech talents
                            </p>
                        </div>
                        <div className="technologies-feature-item-2">
                            <img
                                src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/602cd9a2b5af2925d8b08fb3_sync-blue.svg"
                                loading="lazy"
                                alt=""
                                className="technologies-feature-item-2__icon sass"
                            />
                            <h3 className="technologies-feature-item-2__heading">
                                Trurly Agile process
                            </h3>
                            <p className="technologies-feature-item-2__text">
                                In order to ensure the highest efficiency and transparency of
                                the work of our experts, we take the best principles of an agile
                                approach to software development and extend it to other project
                                areas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
            <div className="section padding-t-b--80 cc--n2">
                <div className="container">
                    <div className="section__heading-wrap">
                        <h2>
                            Our customers
                            <br />
                        </h2>
                    </div>
                    <div className="grid__3-column technologies-testimonial">
                        <div className="technologies-testimonial__card">
                            <img
                                src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6022970d6f14f73ba0104968_carezapp.png"
                                loading="lazy"
                                alt=""
                                className="technologies-testimonial__logo"
                            />
                            <div className="technologies-testimonial__testimonial">
                                &quot;They’ve been investigating and building on existing code
                                with great quality&quot;
                                <br />
                            </div>
                            <div className="technologies-testimonial__author-wrap">
                                <div className="p-small">Andrew Macfarlane</div>
                                <div className="technologies-testimonial__position">
                                    FOUNDER &amp; CEO, CAREZAPP
                                </div>
                            </div>
                        </div>
                        <div className="technologies-testimonial__card">
                            <img
                                src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6022970d045ee74c64d85f4d_gk.png"
                                loading="lazy"
                                alt=""
                                className="technologies-testimonial__logo"
                            />
                            <div className="technologies-testimonial__testimonial">
                                &quot;Their response time stands out&quot;
                            </div>
                            <div className="technologies-testimonial__author-wrap">
                                <div className="p-small">Anthony Tassone</div>
                                <div className="technologies-testimonial__position">
                                    FOUNDER, GREEN KEY TECHNOLOGIES
                                </div>
                            </div>
                        </div>
                        <div className="technologies-testimonial__card">
                            <img
                                src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6022970d0f4cf7600f63c8bd_lexpredict.png"
                                loading="lazy"
                                alt=""
                                className="technologies-testimonial__logo"
                            />
                            <div className="technologies-testimonial__testimonial">
                                “Their responsiveness and attention to detail are outstanding”
                            </div>
                            <div className="technologies-testimonial__author-wrap">
                                <div className="p-small">Eric Detterman</div>
                                <div className="technologies-testimonial__position">
                                    VP AND GLOBAL HEAD OF PRODUCTS, LEXPREDICT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="section padding-t-b--80">
                <div className="container">
                    <div className="section__heading-wrap">
                        <h2>
                            Why we love {title}
                            <br />
                        </h2>
                    </div>
                    <div className="grid__3-column">
                        {benifits?.map((item, index) => (

                            <div className="technologies-feature-item" key={index}>
                                <div className="technologies-feature-item__header-wrap">
                                    <h3 className="technologies-feature-item__heading">
                                        <strong>{item.heading}</strong>
                                    </h3>
                                    <img
                                        src={item.url}
                                        loading="lazy"
                                        alt={item.heading}
                                        className="technologies-feature-item__icon mysass"
                                    />
                                </div>
                                <p className="technologies-feature-item__text">
                                    {item.content}
                                </p>
                            </div>
                        ))
                        }
                    </div>
                    {/* <div className="section__heading-wrap margin-t--80">
                        <h2>
                            Technology used by:
                            <br />
                        </h2>
                    </div>
                    <div className="grid__5-column">
                        {technologyUsedby?.map((item, index) => (

                            <div key={index} className="grid__column align-center">
                                <img
                                    src={item.url}
                                    loading="lazy"
                                    alt={item.title}
                                    className="technologies__technologies-logo sass"
                                />
                            </div>
                        ))
                        }

                    </div> */}
                </div>
                <ContactUs />
            </div>

            <Footer />
        </>
    )
}

export default TechnologyLayout
