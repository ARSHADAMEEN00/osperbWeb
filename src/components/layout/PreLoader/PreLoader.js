import React, { useEffect, useState } from "react";
import "./preloader.css";
import { withRouter } from "react-router-dom";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    let timer1 = setTimeout(() => setLoading(false), 4000);

    if(document.readyState === "complete"){

      window.addEventListener("load", (event) => {
        setTimeout(timer1);
      });
      
    }  
      return () => {
        clearTimeout(timer1);
      };
    
  }, []);

  return (
    <>
      {loading && (
        <>
          {
            <div className="preloaderBg" id="preloader">
              <div className="preloader">
                <img src="/images/logo/loha_oa.png" alt="logo" />
                <div className="preloader2"></div>
              </div>
            </div>
          }
        </>
      )}
    </>
  );
};

export default withRouter(PreLoader);
