import React, { useEffect, useState } from "react";
import "./static.css";
import { HiUserGroup } from "react-icons/hi";
// import { FaRegStar, FaRegHeart } from "react-icons/fa";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
// import ContactFrom from "../ContactFrom/ContactFrom";
import { motion } from "framer-motion";
import GoogleMap from "../ContactFrom/GoogleMap";
const AboutUs = () => {
  const parentVar = {
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
        staggerChildren: 0.6,
      },
    },
  };
  const childrenVar = {
    hidden: {
      y: 15,
    },
    visible: {
      y: 0,
    },
  };

  const [newScroll, setScroll] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <NavBar BrownTheme />
      <div className="about__us">
        <motion.div
          variants={parentVar}
          initial="hidden"
          animate="visible"
          className="right__bgImg"
        >
          <motion.img
            variants={childrenVar}
            src="/images/others/about__bg.jpg"
            alt="bg"
          />
          <motion.label className="reach__out">
            need to reach out to us?
          </motion.label>
        </motion.div>
        <div className="left__content">
          <div className="ab__wrapper">
            <motion.div
              variants={parentVar}
              initial="hidden"
              animate="visible"
              className="ab__div_one"
            >
              <motion.span variants={childrenVar} className="icons_wrap_new">
                <HiUserGroup />
              </motion.span>
              <motion.h4 variants={childrenVar}>About Us</motion.h4>
              <motion.p variants={childrenVar}>
                Loha is a well known steel doors and windows manufacturing
                company in south India. Loha has emerged as a sterling name in
                the highly competitive steel doors and windows industry. Loha
                steel doors and windows offer complete peace of mind to its
                users in terms of price, quality, durability and security. The
                doors are manufactured from high grade steel using
                state-of-the-art technology to ensure supreme resistance to fire
                and other hazards commonly experienced in the case of wooden
                doors. Factory-engineered to perfection, every product is
                uniform in quality and finish; the texture resembles that of
                real wood.
              </motion.p>
            </motion.div>
          </div>
        </div>
        {/* <ContactFrom /> */}
      </div>
        <GoogleMap />
      <Footer home />
      <a
        href="https://wa.me/+919645700075?title=LOHA20%STEELS"
        className={` fixed_btn scroll-to-top ${
          newScroll === true && "show"
        } blink`}
      >
        <button id="chat-btn" className="w_button  btn btn-success">
          <img src="/images/others/Whatsapp2.svg" alt="whasapp" />
          <span>Chat</span>
        </button>
      </a>
    </>
  );
};

export default AboutUs;
