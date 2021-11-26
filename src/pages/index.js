import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/InfoSection/Data';
import Services from '../components/Services';
import { ScrollButton } from '../components/ButtonElements';
import { IoIosArrowUp } from 'react-icons/io';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <InfoSection {...homeObjThree} />
        <Footer>
          <ScrollButton 
            to='home'
            smooth={true}
            duration={1000}
          >
            <IoIosArrowUp font-size="40px"/>
          </ScrollButton>
        </Footer>
      </div>
      <div>
        <ScrollButton 
          to='home'
          smooth={true}
          duration={1000}
        >
          <IoIosArrowUp font-size="40px"/>
        </ScrollButton>
      </div>
    </>
  );
}

export default Home;
