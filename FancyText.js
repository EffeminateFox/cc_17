// U54529624
// Imports React library and CSS for styling
import React from 'react';
import './FancyText.css';

// Defines the FancyText component to display text with different styles based on the title prop
const FancyText = ({ title, text }) => {
  return (
    <div className={title ? "fancy-title" : "fancy-text"}>
      {text}
    </div>
  );
};

// Exports the FancyText component for use in other parts of the application
export default FancyText;
