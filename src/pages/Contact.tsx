import React from 'react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      id: 1,
      name: "Email",
      url: "mailto:jessicayin66@gmail.com",
      icon: "📧",
      label: "jessicayin66@gmail.com"
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jessicayin66/",
      icon: "💼",
      label: "jessicayin66"
    },
    {
      id: 3,
      name: "GitHub",
      url: "https://github.com/jessicayin66",
      icon: "🐙",
      label: "jessicayin66"
    }
  ];

  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p>Let's connect and start a conversation about opportunities and collaborations.</p>
      
      <div className="contact-links">
        {contactLinks.map((contact) => (
          <a
            key={contact.id}
            href={contact.url}
            target={contact.name === "Email" ? "_self" : "_blank"}
            rel={contact.name === "Email" ? "" : "noopener noreferrer"}
            className="contact-link"
          >
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-info">
              <div className="contact-name">{contact.name}</div>
              <div className="contact-label">{contact.label}</div>
            </div>
            <div className="contact-arrow">→</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
