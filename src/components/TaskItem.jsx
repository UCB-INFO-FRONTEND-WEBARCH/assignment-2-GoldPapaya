function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.completed ? "-completed" : ""}`}>
      <input
        type="checkbox"
        id={`task-${task.id}`}
        className={`task-checkbox${task.completed ? "-completed" : ""}`}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label htmlFor={`task-${task.id}`} className="task-label">
        {task.text}
      </label>
      <button
        type="button"
        onClick={() => onDelete(task.id)}
      >
        Delete Task {task.id}
      </button>
    </li>
  );
}

export default TaskItem;
