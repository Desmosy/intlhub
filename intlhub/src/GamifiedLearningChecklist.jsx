import { useState } from "react";

const steps = [
  { id: 1, title: 'Learn Basic Programming Concepts', resource: 'https://www.codecademy.com/learn/learn-how-to-code' },
  { id: 2, title: 'Master a Programming Language (e.g., Python)', resource: 'https://www.python.org/about/gettingstarted/' },
  { id: 3, title: 'Understand Data Structures and Algorithms', resource: 'https://www.coursera.org/learn/data-structures-algorithms-introduction' },
  { id: 4, title: 'Learn Object-Oriented Programming', resource: 'https://www.edx.org/course/object-oriented-programming-in-python' },
  { id: 5, title: 'Study Databases and SQL', resource: 'https://www.w3schools.com/sql/' },
];

const GamifiedList = () => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleSteps = (stepId) => {
    setCompletedSteps(prev =>
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <div>
      <h2>Learn Computer Science</h2>
      <ul>
        {steps.map(step => (
          <li key={step.id}>
            <button onClick={() => toggleSteps(step.id)}>
              {completedSteps.includes(step.id) ? "Completed" : "Mark as Completed"}
            </button>
            <span>{step.title}</span>
            <a href={step.resource} target="_blank" rel="noopener noreferrer">
              Resource
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamifiedList;
