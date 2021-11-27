import React from 'react';
import Carousel from "./carousel";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
} from './AboutElements';

const About = () => {
  return (
    <ServicesContainer id='about'>
      <ServicesH1>Our Bad Bitches on Display</ServicesH1>
      <ServicesWrapper>
        <Carousel />
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default About;
