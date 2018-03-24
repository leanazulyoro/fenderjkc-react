import React from 'react';
import Footer from './Footer/Footer';
import './Page.css';

const Page = (props) => (
  <div className="container">
    {props.children}
    <Footer />
  </div>
);

export default Page;
