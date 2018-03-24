import React from 'react';
import Section from '../Section';
import Nav from './Nav/Nav';
import Share from './Share/Share';
import guitar1 from '../../../assets/images/guitar1.png';
import './Cover.css';

const Cover = (props) => (
  <Section id="cover">
    <img className="guitar1" src={guitar1} />
    <div className="col">
      <Nav />
      <h1>Fender - Jaguar Kurt Cobain</h1>
      <Share />
    </div>
  </Section>
);

export default Cover;
