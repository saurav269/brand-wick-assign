// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [auth] = useAuth();

  return (
    <Route
      {...rest}
      element={auth.token ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;

