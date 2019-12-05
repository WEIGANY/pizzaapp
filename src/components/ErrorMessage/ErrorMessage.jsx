import React from 'react';
import './ErrorMessage.css';
import error from '../../assets/error.png';

const ErrorMessage = ({
  children
}) => (
  <div className="message">
    <img src={error} alt="error" />
    {children}
  </div>
);

export default ErrorMessage;