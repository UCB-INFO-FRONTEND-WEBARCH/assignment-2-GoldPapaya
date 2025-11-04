import React from "react";

function TaskFilter({ filter, onFilter }) {
  return (
    <div id="filter" role="tablist" aria-label="Task filters">
      <h4>Filter</h4>
      <div>
        <button
          type="button"
          className={filter === "all" ? "active" : ""}
          onClick={() => onFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={filter === "active" ? "active" : ""}
          onClick={() => onFilter("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={filter === "completed" ? "active" : ""}
          onClick={() => onFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TaskFilter;
