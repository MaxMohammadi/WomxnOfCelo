import React, { useState } from 'react';
import { Button, ScrollButton } from '../ButtonElements';
import { IoIosArrowUp } from 'react-icons/io';

import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ScrollBtnWrapper,
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <HeroContainer id='home'>
        {/* <ScrollBtnWrapper>
            <Button
              to='home'
              smooth={true}
              duration={500}
              spy={true}
              primary='true'
              dark='true'
            >
              <IoIosArrowUp font-size="40px"/>
            </Button>
          </ScrollBtnWrapper> */}
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
              Mint Now! {hover}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
}

export default HeroSection;
