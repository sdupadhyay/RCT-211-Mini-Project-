import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Navigate, useLocation } from "react-router-dom";
// check if the user is authenaticate , if yes then navigate to require page else navigate to login page
const ReqAuth = ({ children }) => {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ReqAuth;
// state is the feature provided by Navigate , what ever we store in it goes to useLocation hook (inside state)
