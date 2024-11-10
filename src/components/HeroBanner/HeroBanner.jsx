import React from 'react';
import heroImage from '../images/hero-image.png';
import image from '../images/small-hero.png';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span>#TalkToMissMp's </span>
            <p className="hero-title">Digital tool for,</p>
            <p className='highlight'>Psychological Assessments</p>
          </h1>
          <p className="hero-description">
          For further clinical evaluation and research, the APA is offering a number of “emerging measures” in Section III of DSM-5-TR. These patient assessment measures were developed to be administered at the initial patient interview and to monitor treatment progress...
          </p>

          <div className="circle-image-container">
            <img src={image} alt="small-hero" className="circle-image" />
          </div>
          
          <div className="hero-cta">
            <button className="cta-button">
              Book an Appointment
            </button>
          </div>
        </div>
        <div className="hero-image">
          {/* <img src={require('./images/hero-image.png')} /> */}
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;