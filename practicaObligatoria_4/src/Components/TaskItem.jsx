import PropTypes from 'prop-types';

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li>
      <div className="items-text">
        <input type="checkbox" checked={task.checked} onChange={() => toggleCheck(task.taskName)}/>
        <p style={{ textDecoration: task.checked ? 'line-through' : 'none' }}>
          {task.taskName}
        </p>
      </div>
      <button onClick={() => deleteTask(task.taskName)}>Delete</button>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    taskName: PropTypes.string.isRequired,
    checked: PropTypes.bool,
  }),
  deleteTask: PropTypes.func.isRequired,
  toggleCheck: PropTypes.func.isRequired,
};

export default TaskItem;
