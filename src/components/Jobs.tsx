import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Job = {
  id: string;
  fields: {
    Name: string;
    Location: string;
    Description: string;
  };
};

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Job[]>('/job-openings.json')
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching job data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div id="jobs">
      <div>
        <h2 className="text-3xl text-center font-extrabold text-white-900 sm:text-4xl max-w-4xl mx-auto mb-16">
          Current Job Openings
        </h2>
        <ul className="job-list max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <li key={job.id} className="job-item">
              <div className="mt-4 text-2xl gradient-text">{index + 1}. {job.fields.Name}</div>
              <p className="text-base text-gray-400">📍{job.fields.Location}</p>
              <p className="text-base mb-4 text-gray-400">{job.fields.Description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobList;
