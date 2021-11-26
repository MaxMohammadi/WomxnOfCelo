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
        <HeroContent>
          <HeroH1>Empowering womxn around the world through blockchain and Art</HeroH1>
          <HeroP>
            The Womxn of Celo are now ready to mint. Claim yours today for 2 CELO each
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
              Mint Now! {hover ? <ArrowForward /> : <ArrowRight />}
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
