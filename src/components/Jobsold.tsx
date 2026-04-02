import React, { useState } from "react";

const JobListold = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // Calculate indices for the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (

    <div className="bg-gray-50 py-24" id="jobs">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    <div>
     <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
      Current Jobs 
            </h2>
            <p className="mt-6 text-lg text-gray-500">
      <ul>
        {currentJobs.map((job, index) => (
          <li key={index} style={{ marginBottom: "1em" }}>
            <h3 className="mt-4 text-xl text-gray-600">{index+(1)+(currentPage-1)*5}. {job.name} </h3>  
            <p className="text-base text-gray-600 ">📍{job.location}</p>
            <p className="text-base text-gray-500">{job.description}</p>
          </li>
        ))}
      </ul>
      </p>

      {/* Pagination Controls */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              padding: "5px 10px",
              backgroundColor: currentPage === page ? "#007bff" : "#f0f0f0",
              color: currentPage === page ? "#fff" : "#000",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default JobListold;

// Example usage:
const jobs = [
  { name: "Firmware Engineer",location:  "San Deigo/SF Bay area", description: "Looking for a Senior Software/Firmware Engineer with expertise in FPGA, microprocessors, and DSP systems, focusing on high-speed interfaces like Ethernet, PCIe, USB, and SERDES. Must have experience in firmware design, device drivers, low-level debugging, and board bring-up activities for RF and Microwave applications." },
  { name: "AASIC Verification (DV) Engineer ",location:  "San Deigo/SF Bay Area", description: "Looking for a Verification Engineer with 5+ years of experience in System Verilog, UVM, and DDR PHY/LPDDR protocols. Must be skilled in test plan development, BFM/Driver/Monitor creation, stress testing, and debugging, with expertise in analog-digital co-verification and power-aware simulations" },
  { name: "ASIC RTL Design Engineer ",location:  "San Deigo/SF Bay Area", description: "Looking for a Verification Engineer with 5+ years of experience in System Verilog, UVM, and DDR PHY/LPDDR protocols. Must be skilled in test plan development, BFM/Driver/Monitor creation, stress testing, and debugging, with expertise in analog-digital co-verification and power-aware simulations" },
  { name: "ASIC RTL Design Engineer ",location:  "San Deigo/SF Bay Area", description: "Over 7 years of technical engineering experience with 5+ years in SoC/IP development, specializing in Verilog/System Verilog, digital design, high-speed PCIe, ARM Fabric IPs, and interface protocols (AXI, APB). Proficient in EDA tools, clock crossing, low-power design (UPF), STA, scripting (Python, Tcl, Perl), and computer architecture fundamentals." },
  { name: "Java Lead ",location:  " Dallas, TX, Bangalore, India", description: "10+ Years of experience in technologies Node.js, Next.js, React.js, Angular, Redux, RxJS, TypeScript, JavaScript (ES6), HTML5, CSS3, Material-UI.Good experience in managing cloud infrastructure with tools like AWS CloudFormation, Azure Resource Manager (ARM), and Google Cloud Deployment Manager. Designed RESTful APIs using AWS API Gateway, Azure API Management, and Google Cloud Endpoints.Extensive experience with AWS CDK for infrastructure as code, deploying serverless architectures, and integrating databases like MongoDB and MySQL." },
  { name: "QA Automation Engineer ",location:  " Dallas, TX, Bangalore,India", description: "Seeking a QA Automation Engineer (4-10 Years)  with expertise in test automation frameworks, scripting, and continuous integration to ensure high-quality software delivery. Must be proficient in tools like Selenium, Jenkins, and testing methodologies for efficient automated testing" },
  { name: "Data Engineer  ",location:  "USA, Bangalore, India", description: "Looking for a Data Engineer(4-10 Years) with strong experience in data pipelines, ETL processes, and working with big data technologies like Hadoop, Spark, and SQL. Must be skilled in data integration, transformation, and optimizing data flow across platforms." },
  { name: "Data Engineer ",location:  "USA, Bangalore, India", description: "Seeking a developer (4-10 Years)  proficient in Next.js, React.js, Angular, TypeScript, and cloud infrastructure tools like AWS CloudFormation, Azure ARM, and Google Cloud Deployment Manager. Strong experience in designing RESTful APIs, using AWS CDK for serverless architectures, and integrating databases like MongoDB and MySQL." },
  { name: "Senior Manager & Director",location:  " Data Analytics - Bangalore, India", description: "Looking for a Data Science/Engineering expert who is into  the client services space you would be required to deep dive into the customer's problem and identify use cases that could represent an opportunity to develop scalable and business ready data analytics platforms" },
//  { name: "Data Engineer  - USA, Bangalore, India", description: "" },
//  { name: "Data Engineer  - USA, Bangalore, India", description: "" },
  // { name: "Marketing Specialist", description: "Develop marketing campaigns." },
  // { name: "DevOps Engineer", description: "Automate and manage infrastructure." },
  // { name: "Technical Writer", description: "Document technical processes and guides." },
  // { name: "Frontend Developer", description: "Build client-side applications." },
  // { name: "Backend Developer", description: "Develop server-side logic." },
];

// <JobList jobs={jobs} />
