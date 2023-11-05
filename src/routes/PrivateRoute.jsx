import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../providers/ThemeProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(ThemeContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full min-h-[50vh] ">
        Loading...
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
