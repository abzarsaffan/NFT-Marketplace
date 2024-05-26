// Footer.js

import React from 'react';
import './footer.css';

const socialMediaLinks = [
  { icon: 'fab fa-facebook', link: '#' },
  { icon: 'fab fa-twitter', link: '#' },
  { icon: 'fab fa-instagram', link: '#' },
  // Add more social media icons and links as needed
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        {socialMediaLinks.map((item, index) => (
          <a key={index} href={item.link}>
            <i className={item.icon}></i>
          </a>
        ))}
      </div>
      <p>&copy; TEAM 404 NOT FOUND. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
