import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import AssessmentCard from './AssessmentCard';
import './AssessmentList.css';

const AssessmentList = () => {
  const assessments = [
    {
      title: "Assessment 1",
      description: "This is assessment 1.",
      image: img1
    },
    {
      title: "Assessment 2",
      description: "This is assessment 2.",
      image: img2
    }
  ];

  return (
    <div className="assessment-list">
      <div className="assessment-grid">
        {assessments.map((assessment, index) => (
          <AssessmentCard key={index} {...assessment} />
        ))}
      </div>
    </div>
  );
};

export default AssessmentList;