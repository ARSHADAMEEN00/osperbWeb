import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
import NotFoundSvg from "./NotFoundSvg";

function NotFound({ history }) {
  return (
    <>
      <div className="container">

        <div className="row notfound" >
          <div className="col-md-6 align-self-center">
            <NotFoundSvg />
          </div>
          <div className="col-md-6 align-self-center">
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>
              The page you are looking for does not exist. How you got here is
              a mystery. But you can click the button below to go back to the
              homepage.
            </p>
            <button className="btn green" onClick={() => history.push("/")}>
              HOME
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
