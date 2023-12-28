// MainRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Register from './Auth/Register';
import ForgotPass from './Auth/ForgotPass';
import Login from './Auth/Login';
import PagenotFound from './PagenotFound';
import PrivateRoute from '../Components/PrivateRoute';

const MainRoutes = () => {
  return (
    <Routes>
      {/* Protected Route */}
      <Route path='/' element={
        <HomePage />}/>

      {/* Public Routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPass />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PagenotFound />} />
    </Routes>
  );
};

export default MainRoutes;
