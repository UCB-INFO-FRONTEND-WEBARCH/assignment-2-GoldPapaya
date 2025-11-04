import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";

function App() {
  const startingTasks = [
    {
      id: 1,
      text: "Starting Task",
      completed: false,
    },
    {
      id: 2,
      text: "Another Starting Task",
      completed: true,
    },
  ];

  const [tasks, setTasks] = useState(startingTasks);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    setTasks((prev) => {
      const taskId = prev.length > 0 ? prev.length + 1 : 1;
      const task = {
        id: taskId,
        text: text,
        completed: false,
      };
      return [...prev, task];
    });
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? {...task, completed: !task.completed} : task)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => {
      const filteredTasks = prev.filter((task) => task.id !== id);
      const adjustedTaskList = filteredTasks.map((task) =>
        task.id > id ? {...task, id: task.id - 1} : task
      );
      return adjustedTaskList;
    });
  };

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  return (
    <div>
      <section id="header">
        <header class="main-header">
          <img id="menu-icon" src="assets/menu_icon.png" alt="menu_icon" />
          <form id="textbox">
            <img
              id="search-icon"
              src="assets/search_icon.png"
              alt="search_icon"
            />
            <input type="text" placeholder="Quick Find" />
          </form>
          <img id="check-icon" src="assets/check_icon.png" alt="check_icon" />
          <p>30/5</p>
        </header>
      </section>

      <main class="main-content">
        <section id="nav">
          <nav class="sidebar">
            <ul class="nav-list">
              <li>
                <img id="inbox-icon" src="assets/inbox_icon.png" />
                Inbox
                <p>5</p>
              </li>
              <li>
                <img id="calendar-icon" src="assets/calendar_icon.png" />
                Today
                <p>5</p>
              </li>
              <li>
                <img id="upcoming-icon" src="assets/upcoming_icon.png" />
                Upcoming
                <p></p>
              </li>
            </ul>
          </nav>
        </section>

        <section id="content">
          <h1>Inbox</h1>
          <TaskForm onAdd={addTask} />
          <TaskFilter filter={filter} onFilter={setFilter} />
          <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
        </section>
      </main>
    </div>
  );
}

export default App;
