import React from 'react';
import Page from '../Page/Page';
import Features from '../Section/Features/Features';
import Gallery from '../Section/Gallery/Gallery';
import Specs from '../Section/Specs/Specs';
import Artists from '../Section/Artists/Artists';
import Cover from '../Section/Cover/Cover';
import Contact from '../Section/Contact/Contact';
import './App.css';

const App = (props) => (
  <Page>
    <Cover />
    <Features />
    <Gallery />
    <Specs />
    <Artists />
    <Contact />
  </Page>
);

export default App;
