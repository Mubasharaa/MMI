import React from "react";

import Paragraph from './Components/Paragraph';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import total from './images/total knee.png'
import gaserv from './images/gaserv.png'
import hip from './images/total hip.png'
import Laboratory from './images/Laboratory.png'
import  Slider from './Slider';
import NavBar from './Components/NavBar';
import  Cards from './Cards';
import Map from './Map';
import OurSpecialities from './Components/OurSpecialities';
import OurDoctors from './Components/OurDoctors';
import Testimonials from './Components/Testimonials';
import Appointment from './Components/Appointment';
import Friends from './Components/Friends';
import Footer from './Components/Footer';








import "./slider.css";
import "./cards.css";
import "./paragraphimage.css";
import "./Map.css";


function App() {
  return (
    <>
<NavBar/>
<Slider/>
    <Cards/>
    <Paragraph/>
    <OurSpecialities/>
    <OurDoctors/>
      <Appointment/>
      <Testimonials/>
      <Friends/>
      <Map/>
      <Footer/>
    
  </>
  );
};


  
export default App;
