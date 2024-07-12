// U54529624
// Imports React library, tasks array, and FancyText component
import React, { useState } from 'react';
import { tasks } from './tasks';
import FancyText from './FancyText';

// Defines the TaskGenerator component to handle task navigation and completion
const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const markTaskAsCompleted = () => {
    tasks[currentTaskIndex].isCompleted = !tasks[currentTaskIndex].isCompleted;
  };

  const currentTask = tasks[currentTaskIndex];

  return (
    <div>
      <FancyText title text={`Task ${currentTask.id}`} />
      <FancyText text={currentTask.name} />
      <FancyText 
        text={currentTask.isCompleted ? "Completed ✔" : "Pending"} 
      />
      <button onClick={markTaskAsCompleted}>
        {currentTask.isCompleted ? "Mark as Pending" : "Mark as Completed"}
      </button>
      <button onClick={nextTask}>Next Task</button>
    </div>
  );
};

// Exports the TaskGenerator
export default TaskGenerator;
