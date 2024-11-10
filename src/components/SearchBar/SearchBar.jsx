import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search assessments..."
        />
        <div className="search-icon">
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;