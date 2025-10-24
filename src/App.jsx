import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  function handleClick() {
    if (text != '') {
      setTasks([...tasks, text]);
      setText(''); // remove text in textbox
    } else {
      console.log('Empty text entry')
    }
  }

  function handleTextChange(e) {
    setText(e.target.value);
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
          <form>
            <input
              type="text"
              placeholder="Add a task"
              value={text}
              onChange={handleTextChange}
            />
          </form>
          <button onClick={handleClick}>Add task</button>
          <ul class="task-list">
            {tasks.map((task, index) => (
              <li key={index} class="task-item">
                <input
                  type="checkbox"
                  id={`task-${index}`}
                  class="task-checkbox"
                />
                <label for={`task-${index}`} className="class-name">
                  {task}
                </label>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
