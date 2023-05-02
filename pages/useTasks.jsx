import { useEffect, useState } from 'react';

let firstInit = true;

function useTasks(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);
  const [currentTask, setCurrentTask] = useState('');

  const addTaskHandler = (taskTitle) => {
    setTasks(taskTitle ? [...tasks, { id: Date.now(), title: taskTitle, isDone: false }]
      : [...tasks]);
    if (taskTitle) {
      setCurrentTask('');
    }
  };

  const removeTaskHandler = (id) => {
    const filteredTasks = tasks.filter((task) => +task.id !== +id);
    setTasks(filteredTasks);
  };

  const currentTaskValueHandler = (value) => {
    setCurrentTask(value);
  };

  const updateIsTaskDone = (taskID) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return { ...task };
    });
    setTasks(updatedTasks);
  };

  useEffect(() => {
    try {
      if (firstInit) {
        const storedTasks = window.localStorage.getItem('tasks');
        setTasks((prevValue) => (storedTasks ? JSON.parse(storedTasks) : prevValue));
        firstInit = false;
      }
    } catch (err) {
      console.error('Error reading from localStorage', err);
    }
  }, []);

  useEffect(() => {
    if (!firstInit) {
      try {
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (err) {
        console.error('Error in Saving to localStorage', err);
      }
    }
  }, [tasks]);

  return [tasks, currentTask, currentTaskValueHandler,
    addTaskHandler, removeTaskHandler, updateIsTaskDone];
}

export default useTasks;
