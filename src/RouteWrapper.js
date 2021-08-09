import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = sessionStorage.getItem('login');
  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to='/'/>;
  }
  
  return <Route {...rest} component={Component}/>
}

