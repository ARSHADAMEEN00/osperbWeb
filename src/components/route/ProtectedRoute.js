import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({
  isAdmin,
  isLogin,
  component: Component,
  ...rest
}) => {
  const { loading, user } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (user?.firstName) {
              return <Component {...rest} {...props} />;
            } else if (user?.role === "admin") {
              return <Component {...rest} {...props} />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              );
            }
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
