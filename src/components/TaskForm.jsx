import { useState } from "react";

function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleAddBtn = (e) => {
    e.preventDefault();
    if (text != "") {
      onAdd(text);
      setText("");
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleAddBtn}>
        <input
          id="add-task-textbox"
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Type in a task here..."
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
