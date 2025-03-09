import React, { useState } from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  description: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">{job.title}</h3>
        <span className="job-type">{job.type}</span>
      </div>
      <p className="company"><strong>Company:</strong> {job.company}</p>
      <p className="location"><strong>Location:</strong> {job.location}</p>
      
      {showDetails && (
        <div className="job-details">
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
          <p><strong>Description:</strong> {job.description}</p>
        </div>
      )}

      <button 
        onClick={() => setShowDetails(!showDetails)}
        className="details-button"
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

export default JobCard;