import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import './Pages.css';

interface Task {
  id: number
  text: string
  completed: boolean
}

function Tasks() {

  const [tasks, setTasks] = React.useState([])

  useEffect(() => {
    fetch("http://localhost:3008/api/tasks/")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data);
        setTasks(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <div >
      <Header />
      <div className="flex-container">
        <Navbar />
        <div className="content">
          <h2>Task List</h2>
          <ul className="task-list">
          {tasks.map((task: Task) => (
  <div className="task-item" key={task.id}>
    <li>
      <span className="task-text">{task.text}</span>
      <br />
      <span>Completed: {task.completed ? 'True' : 'False'}</span>
    </li>
  </div>
))}

            
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Tasks