import React, { useState } from 'react';
import { Button, ScrollButton } from '../ButtonElements';
import { IoIosArrowUp } from 'react-icons/io';

import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  ScrollContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  ScrollContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ScrollBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to='signup'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              primary='true'
              dark='true'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>



        </HeroContent>

          <ScrollBtnWrapper>
            <ScrollButton
              to='home'
              smooth={true}
              duration={500}
              spy={true}
              primary='true'
              dark='true'
            >
              <IoIosArrowUp font-size="40px"/>
            </ScrollButton>
          </ScrollBtnWrapper>

      </HeroContainer>
    </div>
  );
}

export default HeroSection;
