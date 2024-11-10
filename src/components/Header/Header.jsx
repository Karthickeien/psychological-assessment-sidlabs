import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <img 
        src="https://www.psychiatry.org/assets/images/logos/c-logo.svg" 
        alt="Logo" 
        className="header-logo"
      />
      <p className="header-text">
        Taken &amp; built upon <strong>one of the most trusted &amp; authentic public repository</strong> from APA's <strong>DSM-5-TR Online Assessment Measures</strong>
      </p>
    </div>
  );
};

export default Header;
