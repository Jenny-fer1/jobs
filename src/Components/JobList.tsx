import React from 'react';
import JobCard from './JobCard';

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

const JobList: React.FC = () => {
  const jobs: Job[] = [
    { 
      id: 1, 
      title: "Frontend Developer", 
      company: "Tech Corp", 
      location: "Remote", 
      salary: "₦400,000",
      type: "Full-time",
      experience: "2-4 years",
      description: "We are looking for a frontend developer with experience in React and TypeScript."
    },
    { 
      id: 2, 
      title: "Backend Engineer", 
      company: "Dev Solutions", 
      location: "Enugu", 
      salary: "₦300,000",
      type: "Part-time",
      experience: "1-3 years",
      description: "Build robust backend systems using Node.js and MongoDB."
    },
    { 
      id: 3, 
      title: "Fullstack Developer", 
      company: "Web Masters", 
      location: "Lagos", 
      salary: "₦500,000",
      type: "Full-time",
      experience: "3-5 years",
      description: "Develop complete web applications from frontend to backend."
    },
    { 
      id: 4, 
      title: "UI/UX Designer", 
      company: "Design Co", 
      location: "Remote", 
      salary: "₦350,000",
      type: "Contract",
      experience: "2-4 years",
      description: "Create intuitive and visually appealing user interfaces."
    },
    { 
      id: 5, 
      title: "Data Analyst", 
      company: "Data Insights", 
      location: "Abuja", 
      salary: "₦450,000",
      type: "Full-time",
      experience: "3-5 years",
      description: "Analyze complex data sets to drive business decisions."
    },
    { 
      id: 6, 
      title: "DevOps Engineer", 
      company: "Cloud Solutions", 
      location: "Port Harcourt", 
      salary: "₦600,000",
      type: "Full-time",
      experience: "4-6 years",
      description: "Manage cloud infrastructure and deployment pipelines."
    },
    { 
      id: 7, 
      title: "Mobile Developer", 
      company: "App Builders", 
      location: "Kano", 
      salary: "₦380,000",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop native and cross-platform mobile applications."
    },
    { 
      id: 8, 
      title: "Product Manager", 
      company: "Tech Innovators", 
      location: "Remote", 
      salary: "₦700,000",
      type: "Full-time",
      experience: "5-7 years",
      description: "Lead product development from concept to launch."
    },
    { 
      id: 9, 
      title: "QA Tester", 
      company: "Quality First", 
      location: "Ibadan", 
      salary: "₦250,000",
      type: "Full-time",
      experience: "1-3 years",
      description: "Ensure software quality through rigorous testing procedures."
    },
    { 
      id: 10, 
      title: "Systems Administrator", 
      company: "Network Pros", 
      location: "Calabar", 
      salary: "₦420,000",
      type: "Full-time",
      experience: "3-5 years",
      description: "Manage and maintain company network infrastructure."
    },
    { 
      id: 11, 
      title: "Machine Learning Engineer", 
      company: "AI Solutions", 
      location: "Lagos", 
      salary: "₦650,000",
      type: "Full-time",
      experience: "4-6 years",
      description: "Develop and implement machine learning models for various applications."
    },
    { 
      id: 12, 
      title: "Cyber Security Analyst", 
      company: "SecureTech", 
      location: "Abuja", 
      salary: "₦550,000",
      type: "Full-time",
      experience: "3-5 years",
      description: "Protect systems and networks from security threats."
    }
  ];

  return (
    <div className="job-list">
      {jobs.length === 0 ? (
        <p className="no-jobs">No jobs available at the moment.</p>
      ) : (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      )}
    </div>
  );
};

export default JobList;