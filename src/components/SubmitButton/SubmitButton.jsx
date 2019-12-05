import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({
  onSubmit,
}) => (
  <button 
    type="submit" 
    className="submit"
    onClick={(event) => {
      event.preventDefault();
      onSubmit();
    }}
  >
    Place order
  </button>
);

export default SubmitButton;
