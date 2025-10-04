import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "NewsLens",
      description: "An intelligent news aggregation platform that combines traditional news consumption with AI-powered analysis to provide users with bias-aware, summarized news content. Built with modern web technologies and cutting-edge NLP models, it helps users navigate the complex media landscape with transparency and efficiency.",
      achievements: [
        "Implemented an NLP pipeline using Transformers, PyTorch, and scikit-learn for political bias classification, extractive summarization, and confidence scoring, presenting a bias-aware dashboard to visualize news diversity"
      ],
      technologies: ["React", "FastAPI", "Python", "TypeScript", "Transformers", "PyTorch", "scikit-learn", "NewsAPI"],
      githubLink: "https://github.com/jessicayin66/newslens",
      liveLink: null,
      category: "AI/ML"
    },
    {
      id: 2,
      title: "MasterChef",
      description: "An interactive recipe search platform that allows you to search for recipes based on the ingredients you have at home. Built using React, JavaScript and React Router DOM and leveraging data from integrating the Forkify API.",
      achievements: [],
      technologies: ["React", "JavaScript", "Forkify API", "HTML", "CSS"],
      githubLink: "https://github.com/jessicayin66/MasterChef",
      liveLink: null,
      category: "Web App"
    },
    {
      id: 3,
      title: "PropertyTycoon",
      description: "Online Monopoly style game built as a group project for Software Engineering module at the University of Sussex. A collaborative development project showcasing teamwork and software engineering principles.",
      achievements: [
        "Collaborated with a team of 4 developers to build a complete online multiplayer board game",
        "Implemented game logic, user interface, and networking features using Python and modern software engineering practices"
      ],
      technologies: ["Python", "Software Engineering", "Game Development"],
      githubLink: "https://github.com/AndreasChatzopoulos/PropertyTycoon",
      liveLink: null,
      category: "Game Development"
    }
  ];

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p>Explore the projects I've built and the technologies I've mastered.</p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-category">{project.category}</div>
            </div>
            
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              
              {project.achievements.length > 0 && (
                <div className="project-achievements">
                  <h3 className="achievements-title">🏆 Key Achievements</h3>
                  <ul className="achievements-list">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="project-tech">
                <h3 className="tech-title">⚡ Technologies Used</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                >
                  <span className="link-icon">🔗</span>
                  <span className="link-text">GitHub</span>
                </a>
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link live-link"
                  >
                    <span className="link-icon">🚀</span>
                    <span className="link-text">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
