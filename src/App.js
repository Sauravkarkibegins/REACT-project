import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Section from './components/Section';
import Services from './components/Services';
import Code from './components/Code';

import Footer from './components/Footer';
import { gsap } from 'gsap';
function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    gsap.to('.layer1', { y: '-120vh', delay: '.5' });
    gsap.to('.layer2', { y: '-120vh', delay: '.6' });
    gsap.to('.layer3', { y: '-120vh', delay: '.7' });
    gsap.to('.layer4', { y: '-120vh', delay: '.8' });
    gsap.to('.layer5', { y: '-120vh', delay: '.9' });
    gsap.to('.overlay', { y: '-120vh', delay: '1' });
  }, []);
  return (
    <>
      <div className='overlay'>
        <div className='layer layer1'></div>
        <div className='layer layer2'></div>
        <div className='layer layer3'></div>
        <div className='layer layer4'></div>
        <div className='layer layer5'></div>
      </div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Section />
      <Services />
      <Code />
      
      <Footer />
    </>
  );
}

export default App;
