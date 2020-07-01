import React from 'react';
import './AppTemplate.css';

const AppTemplate = ({ contact, contactDetail }) => {
  return (
    <div className="app-template">
      <div className="contact">{contact}</div>
      <div className="contactDetail">{contactDetail}</div>
    </div>
  );
};

export default AppTemplate;