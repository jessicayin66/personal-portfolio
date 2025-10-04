import React from 'react';

const Work: React.FC = () => {
  const experiences = [
    {
      id: 1,
      type: "work",
      company: "Texas Instruments Inc",
      location: "Toronto, Ontario",
      position: "Software Engineering Intern",
      duration: "09/2025 – Present",
      description: "Developing cloud-based tools for Code Composer Studio, TI's IDE for microcontrollers and processors, using TypeScript, Python, and React",
      technologies: ["TypeScript", "Python", "React", "Cloud Development"],
      logo: "https://companieslogo.com/img/orig/TXN-e197f953.png?t=1720244494"
    },
    {
      id: 2,
      type: "work",
      company: "Amazon",
      location: "Vancouver, British Columbia",
      position: "Front End Engineer Intern",
      duration: "05/2025 – 08/2025",
      description: "Designed and built an automated log analysis system to production for AWS S3 Console on-call engineers, cutting workflow time from hours to 2–5 minutes. Deployed event-driven pipelines with AWS CDK, integrating with internal APIs and several AWS services, while strengthening expertise in TypeScript, distributed systems, and large-scale automation",
      technologies: ["TypeScript", "AWS CDK", "Distributed Systems", "Automation", "React"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png"
    },
    {
      id: 3,
      type: "work",
      company: "Ansys Inc.",
      location: "Canonsburg, Pennsylvania",
      position: "Software Developer Intern",
      duration: "09/2024 – 12/2024",
      description: "Built a Typescript interface to integrate FlexNet Operations SOAP-based Web Services into Ansys' Licensing Elastic middleware. Led the development of RESTful API endpoints using Express.js for a centralized authorization API supporting Ansys's licensing infrastructure",
      technologies: ["TypeScript", "Express.js", "RESTful APIs", "SOAP", "Middleware"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Ansys_logo_%282019%29.svg"
    },
    {
      id: 4,
      type: "work",
      company: "Ford Motor Company of Canada Limited",
      location: "Waterloo, Ontario",
      position: "Android HMI Software Developer Intern",
      duration: "01/2024 – 04/2024",
      description: "Owned end-to-end implementation of 10+ custom UI components for Ford's SYNC Infotainment system using Java, Kotlin, Jetpack Compose, and XML. Integrated Android Car API and RESTful APIs, reducing app load time by 5 seconds in the embedded device via optimized data processing",
      technologies: ["Java", "Kotlin", "Jetpack Compose", "XML", "Android Car API", "RESTful APIs"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/200px-Ford_logo_flat.svg.png"
    },
    {
      id: 5,
      type: "work",
      company: "QBuild Software",
      location: "Markham, Ontario",
      position: "Software Developer Intern",
      duration: "05/2023 – 08/2023",
      description: "Optimized CADLink performance, reducing data load times by 60%, and implemented customer-requested features across multiple products using C#, ASP.NET, and JavaScript with jQuery",
      technologies: ["C#", "ASP.NET", "JavaScript", "jQuery", "Performance Optimization"],
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFLhNc4_9qRmg/company-logo_200_200/company-logo_200_200/0/1720029598962/qbuild_software_logo?e=2147483647&v=beta&t=cf-vyvgjf9OFfIeszt_JsaTG5EIFqO6sgr-xO8l6dHo"
    },
    {
      id: 6,
      type: "work",
      company: "QBuild Software",
      location: "Markham, Ontario",
      position: "Application Developer Intern",
      duration: "09/2022 – 12/2022",
      description: "Enhanced CRM system efficiency through full-stack development in C#, SQL, JavaScript, HTML/CSS, and Telerik/Kendo UI, delivering enhancements and bug fixes that reduced operational issues by 60%",
      technologies: ["C#", "SQL", "JavaScript", "HTML/CSS", "Telerik", "Kendo UI", "Full-Stack"],
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFLhNc4_9qRmg/company-logo_200_200/company-logo_200_200/0/1720029598962/qbuild_software_logo?e=2147483647&v=beta&t=cf-vyvgjf9OFfIeszt_JsaTG5EIFqO6sgr-xO8l6dHo"
    },
    {
      id: 7,
      type: "education",
      company: "University of Waterloo",
      location: "Waterloo, Ontario",
      position: "Bachelor of Computer Science",
      duration: "09/2021 – 05/2026",
      description: "Relevant Courses: Applied Machine Learning, Algorithms, Data Structures, Database Management, Operating Systems",
      technologies: ["Machine Learning", "Algorithms", "Data Structures", "Database Management", "Operating Systems"]
    },
    {
      id: 8,
      type: "education",
      company: "University of Toronto Schools",
      location: "Toronto, Ontario",
      position: "High School",
      duration: "09/2017 – 06/2021",
      description: "GPA: 98.6",
      technologies: []
    }
  ];

  return (
    <div className="work-page">
      <h1>Work Experience</h1>
      <p>Discover my professional journey and the skills I've developed along the way.</p>
      
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={experience.id} className={`timeline-item ${experience.type}`}>
            <div className="timeline-marker">
              <div className="marker-icon">
                {experience.type === "work" ? (
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`} 
                    className="company-logo"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  "🎓"
                )}
                {experience.type === "work" && (
                  <div className="logo-fallback" style={{display: 'none'}}>
                    {experience.company.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="timeline-content">
              <div className="experience-header">
                <h2 className="company-name">{experience.company}</h2>
                <div className="experience-meta">
                  <span className="position">{experience.position}</span>
                  <span className="duration">{experience.duration}</span>
                </div>
                <div className="location">{experience.location}</div>
              </div>
              
              <div className="experience-description">
                <p>{experience.description}</p>
              </div>
              
              {experience.type === "work" && experience.technologies.length > 0 && (
                <div className="experience-technologies">
                  <h3 className="tech-title">⚡ Technologies Used</h3>
                  <div className="tech-tags">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
