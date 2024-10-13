import { Task } from "../Types/Task";
import { TaskStateControls } from "../Types/TaskStateControl";

interface TaskItemFunctions {
  handleState: (state: TaskStateControls, taskID: number) => void;
  task: Task
}

export default function TaskItem({ handleState, task }: Readonly<TaskItemFunctions>) {
  function handleDelete() {
    handleState(TaskStateControls.delete, task.id);
  }

  function handleDoneState() {
    handleState(TaskStateControls.isDone, task.id);
  }

  return (
    <div className="task-box">
      <div className="task-title-container">
        <p className="task-title">{task.title}</p>
        <input
          onChange={handleDoneState}
          className="task-isDone-state"
          type="checkbox"
        />
      </div>
      <p className="task-description">{task.description}</p>
      <div className="task-buttons-container">
        <button onClick={handleDelete}>
          <img
            src="../trash.svg"
            width="20px"
            height="20px"
            alt="task delete icon"
          />
        </button>
      </div>

      {task.isDone ? (
        <div className="task-done-layer" style={{ display: task.isDone ? 'absolute' : 'none' }}>
          <img src="../done.svg" alt="Done icon" width="50px" height="50px" />
          <p>Done</p>
          <button onClick={handleDelete}>
            <img
              src="../whiteTrash.svg"
              width="20px"
              height="20px"
              alt="task delete icon"
            />
          </button>
        </div>
      ) : null}

    </div>
  );
}


