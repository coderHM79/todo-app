import TaskItem from "./TaskItem";
import { Task } from "../Types/Task";
import { useState } from "react";
import AddTaskBox from "./AddTaskBox";
import { TaskStateControls } from "../Types/TaskStateControl";

let nextId = 0;

function TodoContainer() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleTaskState(state: TaskStateControls, taskID: number) {
    switch (state) {
      case TaskStateControls.delete:
        setTasks(tasks.filter((task) => task.id !== taskID));
        break;
      case TaskStateControls.isDone:
        setTasks(tasks.map((task) => {
          if (task.id === taskID) {
            return {
              ...task,
              isDone: !task.isDone,
            };
          } else {
            return task;
          }
        }));
        break;
    }
  }

  function handleDataFromAddTaskButton(taskTitle: string, taskDescription: string) {
    setTasks([...tasks, { id: nextId++, title: taskTitle, description: taskDescription, isDone: false, },]);
  } // end of handleDataFromAddTaskButton

  return (
    <div className="todo-container">
      {tasks.map((tsk, index) => (<TaskItem key={'00' + index} handleState={handleTaskState} task={tsk} />))}

      <button
        onMouseEnter={() => setVisibility(true)}
        onClick={() => visibility ? setVisibility(false) : setVisibility(true)}
        className="btn-add"
        style={{ backgroundColor: visibility ? "#ee0653" : "#23d5ab" }}
      >
        <img
          src={visibility ? "../close.svg" : "../add.svg"}
          alt="Add button icon"
          width="20px"
          height="20px"
        />
      </button>

      {visibility ? (<AddTaskBox sendTask={handleDataFromAddTaskButton} />) : null}

    </div>
  );
}

export default TodoContainer;
