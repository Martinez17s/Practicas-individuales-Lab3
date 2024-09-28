import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputValue = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    if (task.trim() === '') return;
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add Item"
        value={task}
        onChange={handleInputValue}
      />
      <button>+</button>
    </form>
  );
};

TaskInput.propTypes = {
  addTask: PropTypes.func, // Validación de la prop addTask
};

export default TaskInput;
