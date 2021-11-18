import React from "react";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiDjango, SiFlutter } from "react-icons/si";
import { GrReactjs } from "react-icons/gr"
import { AiOutlineCloud } from "react-icons/ai"
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import ContactUs from "../ContactFrom/ContactUs";
import "./technology.css";

function Technologies() {
  return (
    <>
      <NavBar />
      <div className="section__subpage-hero">
        <div className="container">
          <div className="section__heading-wrap">
            <h1>Technologies</h1>
            <p id="backend" className="p-huge">
              Effective solutions built to transform businesses and solve
              problems of SMEs.
              <br />
            </p>
          </div>
          <h3 className="margin-b-24 ">
            Back-end
            <br />
          </h3>
          <div className="grid__2-column mb--100">
            <Link
              to="/technologies/node"
              className="technology-card w-inline-block"
            >
              <div className="technology-card__heading-wrap">
                <FaNodeJs className="technology-card__icon sass blueColor" />
                <h5 className="technology-card__heading hoverBlue">Node.js</h5>
              </div>
              <p className="technology-card__text ">
                Any lightweight and speed applications development framework. If
                you need any complex SPA, chatrooms, streaming applications -
                that’s your choice.
              </p>
            </Link>
            {/* <a
              href="/development-services/ruby-on-rails-development-services"
              className="technology-card w-inline-block"
            >
              <div className="technology-card__heading-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6019122a03ea2ecad5516eb6_ror.svg"
                  loading="lazy"
                  alt=""
                  className="technology-card__icon sass"
                />
                <h5 className="technology-card__heading">Ruby on Rails</h5>
              </div>
              <p className="technology-card__text">
                The best tool to build your first MVP, any complex content
                management system or regular web application - welcome to Ruby
                world.
              </p>
            </a> */}
            <Link
              to="/technologies/python"
              className="technology-card w-inline-block"
            >
              <div className="technology-card__heading-wrap">

                <FaPython className="technology-card__icon sass blueColor" />
                <h5 className="technology-card__heading hoverBlue">Python</h5>
              </div>
              <p className="technology-card__text">
                Looking for scalable and versatile technology for data science,
                machine learning, scripts, and almost any web application?
                Python fits great for heavy maths operations that’s why we use
                it for fintech
              </p>
            </Link>
            <Link to="/technologies/django"
              href="/development-services/django-development-services"
              className="technology-card w-inline-block"
            >
              <div className="technology-card__heading-wrap">

                <SiDjango className="technology-card__icon sass blueColor" />
                <h5 className="technology-card__heading hoverBlue">Django</h5>
              </div>
              <p className="technology-card__text">
                Python-based framework we use to create server-side web
                applications faster and smarter. It’s easy to scale and secure
                from the box.{" "}
              </p>
            </Link>
            {/* <a
              href="/development-services/meteor-js-development-services"
              className="technology-card w-inline-block"
            >
              <div className="technology-card__heading-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/60191228a278ddd872a8938c_meteorjs.svg"
                  loading="lazy"
                  alt=""
                  className="technology-card__icon sass"
                />
                <h5 className="technology-card__heading">Meteor.js</h5>
              </div>
              <p className="technology-card__text">
                By-default solution build to speed the process of writing
                real-time web apps. The almost ideal framework for a startup.
              </p>
            </a> */}
            <div id="front-end">
              <Link to="/technologies/express"
                href="/development-services/express-js-development-services"
                className="technology-card w-inline-block"
              >
                <div className="technology-card__heading-wrap">
                  {/* <SiExpress className="technology-card__icon sass blueColor" /> */}
                  <h5 className="technology-card__heading hoverBlue">Express.js</h5>
                </div>
                <p className="technology-card__text">
                  Social media apps, Collaboration tools, API. Create
                  server-side web applications faster and smarter.{" "}
                </p>
              </Link >
            </div>
          </div>
          <h3 className="margin-b-24">
            Front-end
            <br />
          </h3>
          <div id="mobile" className="grid__2-column mb--100">
            <Link to="/technologies/react"
              href="/development-services/react-js-development-services"
              className="technology-card w-inline-block"
            >
              <div className="technology-card__heading-wrap">

                <GrReactjs
                  className="technology-card__icon sass blueColor"
                />
                <h5 className="technology-card__heading hoverBlue">React.js</h5>
              </div>
              <p className="technology-card__text">
                Make the applications dynamic, build real-time apps, reuse
                components, and think in terms of modular architecture, and a
                generous ecosystem for your front-end.
                <br />
              </p>
            </Link>
          </div>
          <h3 className="margin-b-24">
            Mobile
            <br />
          </h3>
          <div id="devops" className="grid__2-column mb--100">
            <Link to="/technologies/reactnative"
              href="/development-services/react-native-development-services"
              className="technology-card w-inline-block"
            >
              <div className="technology-card__heading-wrap">
                <GrReactjs
                  className="technology-card__icon sass blueColor"
                />
                <h5 className="technology-card__heading hoverBlue">React Native</h5>
              </div>
              <p className="technology-card__text">
                Cost-effective solution for quicker development and release of
                an app that works on Android and iOS at the same time.
                <br />
              </p>
            </Link >
            <Link to="/technologies/flutter"
              href="/development-services/react-native-development-services"
              className="technology-card w-inline-block"
            >
              <div className="newHeadWrapper">
                <div className="technology-card__heading-wrap">

                  <SiFlutter className="technology-card__icon sass blueColor" />
                  <h5 className="technology-card__heading hoverBlue">Flutter</h5>
                </div>
                <p className="technology-card__text">
                  Cost-effective solution for quicker development and release of
                  an app that works on Android and iOS at the same time.
                  <br />
                </p>
              </div>
            </Link >
          </div>
          <h3 className="margin-b-24">
            DevOps
            <br />
          </h3>
          <div className="grid__2-column">
            <Link to="#!" className="technology-card w-inline-block">
              <div className="technology-card__heading-wrap">

                <AiOutlineCloud
                  className="blueColor technology-card__icon sass"
                />
                <h5 className="technology-card__heading hoverBlue">Cloud</h5>
              </div>
              <p className="technology-card__text">
                We’re experts in Digital Ocean, AWS, Google Cloud &amp; Azure.
              </p>
            </Link>
            <Link to="#!" className="technology-card w-inline-block">
              <div className="technology-card__heading-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/6019122831a68457d4208b64_automation.svg"
                  loading="lazy"
                  alt=""
                  className="technology-card__icon sass"
                />
                <h5 className="technology-card__heading hoverBlue">Automation</h5>
              </div>
              <p className="technology-card__text">
                Make DevOps fast and automated with Ansible, Terraform &amp;
                Jenkins.
              </p>
            </Link>
            <Link to="#!" className="technology-card w-inline-block">
              <div className="technology-card__heading-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/60100d2607bb730b274862d6/601912283d1cb105c576c023_monitoring.svg"
                  loading="lazy"
                  alt=""
                  className="technology-card__icon sass"
                />
                <h5 className="technology-card__heading hoverBlue">Monitoring</h5>
              </div>
              <p className="technology-card__text">
                Your business needs to know in a second, what’s happening with
                infrastructure. We use Logentries, ELK, Prometheus, Sentry, and
                more.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}

export default Technologies;
