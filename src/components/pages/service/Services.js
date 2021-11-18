import React from "react";
import ServiceLayout from "./ServiceLayout";
import MobileAnime from "../../layout/animation/MobileAnime";
import SoftwearAnime from "../../layout/animation/SoftwearAnime";
import WebsiteAnime from "../../layout/animation/WebsiteAnime";

import "./services.css";

export const MobileDev = () => {

  return (
    <>
      <ServiceLayout
        title=" Mobile App"
        description=" We have an outside-the-box type of mindset and are experts in
                various web, mobile, and IoT languages and frameworks."
        heroSvg={<MobileAnime />}
        uqeAboutus={<>
          <h3>Our Motto</h3>
          <p>
            We're not here to build prototypes. Instead, our goal is to
            lay the technical foundation of your company with
            user-friendly, fast, mobile applications that match your
            requirements. We take coding seriously here. Our technical
            approach perfectly complements your creative vision.
          </p>
        </>

        }
      />
    </>
  );
}

export const SoftwearDev = () => {
  return (
    <>

      <ServiceLayout title="Software" description=" With deep experience in web, mobile, and back-end platforms, our
                software solutions are scalable, flexible, and most importantly,
                secure."
        heroSvg={<SoftwearAnime />}
        uqeAboutus={<>
          <h3>Our Motto</h3>
          <p>
            We're not here to build prototypes. Instead, our goal is to
            lay the technical foundation of your company with
            user-friendly, fast, mobile applications that match your
            requirements. We take coding seriously here. Our technical
            approach perfectly complements your creative vision.
          </p></>} />



    </>
  );
}


export const WebsitesDev = () => {

  return (
    <>

      <ServiceLayout title=" Website" description=" Give your customers the experience they deserve. We craft
                state-of-the-art, responsive websites. We are team of talented
                designers making websites"
        heroSvg={<WebsiteAnime />}
        uqeAboutus={<>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              <i className="ri-check-double-line"></i> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat
            </li>
            <li>
              <i className="ri-check-double-line"></i> Duis aute irure dolor
              in reprehenderit in voluptate velit
            </li>
            <li>
              <i className="ri-check-double-line"></i> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat
            </li>
          </ul>
        </>} />


    </>
  );
}