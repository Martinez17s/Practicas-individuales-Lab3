import { useState } from 'react';
import TaskInput from './Components/TaskInput';
import TaskItem from './Components/TaskItem';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (deleteTaskName) => {
    setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName));
  };

  const toggleCheck = (taskName) => {
    setToDoList((prevToDoList) => prevToDoList.map(task =>
      task.taskName === taskName ? { ...task, checked: !task.checked } : task
    ));
  };

  return (
    <div className="app-container">
      <TaskInput addTask={addTask} />
      <div className="toDoList">
        <span className="list-title">To Do List</span>
        <ul className="list-items">
          {toDoList.map((task, key) => (
            <TaskItem
              task={task}
              key={key}
              deleteTask={deleteTask}
              toggleCheck={toggleCheck}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

