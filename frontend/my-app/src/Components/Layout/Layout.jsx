import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { Toaster } from 'react-hot-toast';
// import { ToastContainer } from 'react-toastify';


const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster/>
        {/* <ToastContainer /> */}
        {children}
        </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title : "Book Collection App",
  description : "Full Stack App",
  keywords : "React, express,node, mongoDb",
  author : 'Saurav'
}

export default Layout;
