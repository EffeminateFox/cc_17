// U54529624
// Imports React library, FancyText component, TaskGenerator component, and CSS for styling
import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import './App.css';

// Defines the App component as the main component of the application
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* Use FancyText component to display the main title */}
        <FancyText title text="Task Management App" />
      </header>
      <main>
        {/* Integrate the TaskGenerator component and manages and display tasks */}
        <TaskGenerator />
      </main>
      <footer className="App-footer">
        {/* Display a footer with copyright notice */}
        <FancyText text="© 2024 Task Management App" />
      </footer>
    </div>
  );
};

// Exports the App component as the default export
export default App;
