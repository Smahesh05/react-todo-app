import Task from "./Task";

function TaskList({ tasks, editTask, deleteTask, toggleCompleted }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}

export default TaskList;
