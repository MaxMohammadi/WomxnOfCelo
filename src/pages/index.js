import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Mint from '../components/Mint';
import About from '../components/About';
import { ScrollButton, Button } from '../components/ButtonElements';
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
        <About />
        <Footer />
      </div>
      {/* <div>
        <Button 
          to='home'
          smooth={true}
          duration={1000}
        >
          <IoIosArrowUp font-size="40px"/>
        </Button>
      </div> */}
    </>
  );
}

export default Home;
