import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import "./homeNew.css"

import {
    useViewportScroll,
    motion,
    useTransform,
    useSpring,
    useMotionValue,
} from 'framer-motion';
import SoftwearAnime from '../../layout/animation/SoftwearAnime';
import MobileAnime from '../../layout/animation/MobileAnime';
import WebsiteAnime from '../../layout/animation/WebsiteAnime';



function ParallaxSection() {
    const { scrollY } = useViewportScroll();
    // const spring = useSpring(0, { stiffness: 300, duration: 2.5 })
    const y1 = useTransform(scrollY, [0, 500], [0, -250]);
    const y2 = useTransform(scrollY, [0, 800], [0, -600]);
    const y3 = useTransform(scrollY, [0, 1400], [0, -1200]);

    return (
        <>
            <motion.div className="box" style={{ y: y1, x: 0, backgroundColor: "ffffff" }} >
                <div className="heroParallax">
                    <div >
                        <div className="col-md-12 hoverEffects" style={{ height: "100vh" }}>
                            <div className="container">
                                <div className="row">
                                    <Link
                                        to="/service/website" className="col-lg-6 d-flex flex-column justify-content-center">
                                        <h1 data-aos="fade-up " className="hoverBlue">
                                            Website
                                            <br /> <span>Development</span>
                                        </h1>
                                        <p data-aos="fade-up" data-aos-delay="400" style={{ cursor: "default" }}>
                                            Give your customers the experience they deserve. We
                                            craft state-of-the-art, responsive websites.
                                        </p>
                                        <div data-aos="fade-up" data-aos-delay="600">
                                            <div className="text-center text-lg-start">
                                                <Link
                                                    to="/services/website"
                                                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                                                >
                                                    <span>Learn more</span>
                                                    <FiArrowUpRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/services/website"
                                        className="col-lg-6 hero-img"
                                        data-aos="zoom-out"
                                        data-aos-delay="200"
                                    >
                                        <WebsiteAnime />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="box"
                style={{ y: y2, x: 0, background: '#f7f8f9' }}
            >
                <div >
                    <div >
                        <div className="col-md-12 hoverEffects">
                            <div className="container">
                                <div className="row">
                                    <Link
                                        to="/service/mobileapp" className="col-lg-6 d-flex flex-column justify-content-center">
                                        <h1 data-aos="fade-up" className="hoverBlue">
                                            Mobile App
                                            <br />
                                            <span> Development</span>
                                        </h1>
                                        <p data-aos="fade-up" data-aos-delay="400" style={{ cursor: "default" }}>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content.
                                        </p>
                                        <div data-aos="fade-up" data-aos-delay="600">
                                            <div className="text-center text-lg-start">
                                                <Link
                                                    to="/service/mobileapp"
                                                    href="#about"
                                                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                                                >
                                                    <span>Learn more</span>
                                                    <FiArrowUpRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/service/mobileapp"
                                        className="col-lg-6 hero-img"
                                        data-aos="zoom-out"
                                        data-aos-delay="200"
                                    >
                                        <MobileAnime />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="box"
                style={{ y: y3, x: 0, background: '#e9ecef', zIndex: 9, marginBottom: "-1100px" }}
            >
                <div

                    className="heroParallax"
                >
                    <div >
                        <div className="col-md-12 hoverEffects">
                            <div className="container">
                                <div className="row">
                                    <Link
                                        to="/service/softwear"
                                        className="col-lg-6 d-flex flex-column justify-content-center"
                                    >
                                        <h1 data-aos="fade-up" className="hoverBlue">
                                            Software
                                            <br /> <span>Development</span>
                                        </h1>

                                        <p
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                            style={{ cursor: "default" }}
                                        >
                                            Some quick example text to build on the card title
                                            and make up the bulk of the card's content.
                                        </p>
                                        <div data-aos="fade-up" data-aos-delay="600">
                                            <div className="text-center text-lg-start">
                                                <Link
                                                    to="/service/softwear"
                                                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                                                >
                                                    <span>Learn more</span>
                                                    <FiArrowUpRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/service/softwear"
                                        className="col-lg-6 hero-img"
                                        data-aos="zoom-out"
                                        data-aos-delay="200"
                                    >
                                        <SoftwearAnime />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>


        </>
    )
}

export default ParallaxSection;
