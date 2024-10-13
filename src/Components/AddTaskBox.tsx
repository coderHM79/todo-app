import { useState } from "react";

interface SendDataToParent {
  sendTask: (title: string, description: string) => void;
}

export default function AddTaskBox({ sendTask }: Readonly<SendDataToParent>) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleClick() {
    if (title !== "" && description !== "")
      sendTask(title, description);
    else
      alert("Please enter the title and description")
  }

  return (
    <div className="add-task-box">
      <p className="task-box-title">Add your task</p>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Please write your title."
        value={title}
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Please write your description."
        value={description}
      />
      <input type="button" value="Add" onClick={handleClick} />
    </div>
  );
};

