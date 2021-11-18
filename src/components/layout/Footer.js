import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
function Footer({ home }) {
  return (
    <div className={`row footer flex ${home && 'homeTheme'}`}>
      <div className="row footer_content container flex">
        <div className="col-md-6 footer_text_wrap ">
          <div className="col-md-4 col-2 footer_text main">
            <h1>LOHA</h1>
            <Link to="/category/windows">Projects</Link>
            <Link to="/category/windows">Service</Link>
            <Link to="/projects">Project</Link>

          </div>

          <div className="col-md-6 col-6 footer_text tw">
            <h1> 	&nbsp; </h1>
            <Link to="/about">About us</Link>
            <Link to="/about">Contact</Link>
            <Link to="/blog/Advantages%20of%20Steel%20Doors">Latest Update</Link>

          </div>
        </div>

        <div className="col-md-3 col-4 footer_text icon ">
          <h1>FOLLOW US </h1>
          <div className="footer_icons flex">
            <div className="react__icon">
              <a
                rel="noreferrer"
                target='_blank'
                href="https://www.facebook.com/astshelving"
                title="astshelving facebook"
              >
                <FaFacebookF id="fb__icon" size="1.3rem" title="facebook" />
              </a>
            </div>
            <div className="react__icon">
              <a
                target='_blank'
                rel="noreferrer"
                href="https://www.instagram.com/astshelving/"
                title="astshelving instagram"
              >
                <FaInstagram id="In__icon" size="1.3rem" title="instagram" />
              </a>
            </div>
            <div className="react__icon">
              <a href="https://wa.me/971552429511" rel="noreferrer" target='_blank' title="astshelving whatsapp">
                <FaWhatsapp id="Ln__icon" size="1.3rem" title="whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 footer_foot">
        <p>
          {new Date().getFullYear()} ©{" "}
          <Link to="/" title="LOHA STEELS" style={{ cursor: "pointer" }}>
            Loha
          </Link>{" "}
          . All Rights Reserved | Developed by{" "}
          <a title="Website development company" href="https://osperb.com">
            osperb
          </a>
        </p>
        <p>
          <a className="newLinks"
            title="Website development company" href="https://osperb.com">
            Developed by
            <span style={{ color: "#1781bb" }}> osperb</span>
          </a> <br />
          {new Date().getFullYear()} ©{" "}
          <Link to="/" title="LOHA STEELS" className="newLinks" style={{ cursor: "pointer" }}>
            Loha
          </Link>{" "}
          . All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
