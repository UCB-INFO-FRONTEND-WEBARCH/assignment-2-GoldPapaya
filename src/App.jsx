import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const startingTasks = [
    {
      id: 1,
      text: 'Starting Task',
      completed: false,
    },
    {
      id: 2,
      text: 'Annother Starting Task',
      completed: true,
    },
  ]

  const [tasks, setTasks] = useState(startingTasks);

  const addTask = (text) => {

  }

  const toggleTask = () => {
    
  }

  const deleteTask = () => {
    
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
          {/*TODO: implement TaskForm, TaskList (and TaskItem) render fine*/}
          {/*Also the functions calls work but they need to be finished */}
          <TaskForm
          onAdd={addTask}
          />
          <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
