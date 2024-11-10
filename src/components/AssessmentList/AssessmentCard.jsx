import React from 'react';
import './AssessmentList.css';

const AssessmentCard = ({ title, description, image }) => {
  return (
    <div className="assessment-card">
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <div className="card-image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <p className="card-description">{description}</p>
        <div className="card-actions">
          <button className="take-test-button">Take Test</button>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;