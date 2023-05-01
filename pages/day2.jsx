import React, { useState } from 'react';
import Popup from '../components/Popup';
import styles from './day2.module.css';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Next.js' },
  ]);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, title: `Task ${tasks.length + 1}` }]);
  };

  const instructionsText = `
  1. Add an input field for adding new tasks.
  2. Implement a state variable to manage the value of the new task input field.
  3. Update the addTask function to create a new task based on the input field value.
  4. Add a removeTask function to remove a task by its ID.
  5. Implement a button for each task to remove it.
  6. Create a custom hook useTasks to manage the tasks state and related functions.
  7. Replace the useState and functions in the TaskList component with the custom hook useTasks.
  8. Add a toggleComplete function to mark a task as completed or not.
  9. Implement a checkbox for each task to toggle its completion status.
  10. Style completed tasks with a strike-through.
  11. Implement a useEffect hook to store the tasks in the local storage.
  12. Use the useEffect hook to load the tasks from local storage when the component mounts.`;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Task List</h1>
      <button className={styles.button} type="button" onClick={openPopup}>Challenges</button>
      {showPopup && (
        <Popup
          title="Day 2 Challenges"
          text={instructionsText}
          onClose={closePopup}
        />
      )}
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.listItem}>{task.title}</li>
        ))}
      </ul>
      <button type="button" className={styles.addButton} onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskList;
