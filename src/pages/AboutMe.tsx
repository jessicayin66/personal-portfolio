import React from 'react';

const AboutMe: React.FC = () => {
  const programmingLanguages = [
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'HTML/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    { name: 'XML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg' }
  ];

  const frameworksAndTools = [
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'ExpressJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'jQuery', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
    { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' }
  ];

  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Hi, I'm Jessica! I'm a graduating Computer Science student at the University of Waterloo with a passion for building intelligent, user-centered software that simplifies everyday life. I love integrating AI to make systems more efficient and impactful across different domains.
        </p>
        <p>
          Known for being a fast learner, strong communicator, and detail-oriented problem solver, I thrive in collaborative, high-impact environments. When I'm not coding, I'm likely planning my next trip, exploring fashion trends, or staying active.
        </p>
        
        <div className="resume-section">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
            <span className="resume-icon">📄</span>
            <span className="resume-text">DOWNLOAD RESUME</span>
            <span className="resume-level">PDF</span>
          </a>
        </div>
        
        <div className="character-stats">
          <div className="stat-section">
            <h2 className="stat-title">⚔️ Programming Powers</h2>
            <div className="powers-grid">
              {programmingLanguages.map((skill, index) => (
                <div key={index} className="power-card">
                  <img src={skill.logo} alt={skill.name} className="power-logo" />
                  <span className="power-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stat-section">
            <h2 className="stat-title">🛠️ Tools & Frameworks</h2>
            <div className="powers-grid">
              {frameworksAndTools.map((skill, index) => (
                <div key={index} className="power-card">
                  <img src={skill.logo} alt={skill.name} className="power-logo" />
                  <span className="power-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
