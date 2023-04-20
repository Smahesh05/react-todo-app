import { useState } from "react";

function Task({ task, editTask, deleteTask, toggleCompleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTitle(task.title);
  };

  const handleSaveEdit = () => {
    editTask(task.id, title);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleCompleted = () => {
    toggleCompleted(task.id);
  };

  const taskStyle = {
    color: task.completed ? "red" : "black",
    fontSize: "18px",
    fontWeight: 700,
  };

  return (
    <li style={taskStyle} className="grid-list-item">
      {isEditing ? (
        <div className="edit-list">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="btn-action">
            <button className="btn" onClick={handleSaveEdit}>
              <i className="ri-loop-left-line"></i>
            </button>
            <button className="btn" onClick={handleCancelEdit}>
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="edit-list">
          <div>
            <span className="main-title">{task.title}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggleCompleted}
            />
          </div>
          <div className="btn-action">
            <button className="btn" onClick={handleEdit}>
              <i className="ri-edit-2-fill"></i>
            </button>
            <button className="btn close" onClick={handleDelete}>
              <i className="ri-delete-bin-fill"></i>
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Task;
