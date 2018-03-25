import React from 'react';
import Page from '../Page/Page';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Specs from '../Specs/Specs';
import Artists from '../Artists/Artists';
import Cover from '../Cover/Cover';
import Contact from '../Contact/Contact';
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
