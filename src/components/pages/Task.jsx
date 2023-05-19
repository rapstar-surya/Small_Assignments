import React, { useState } from "react";
import task from "../css/Task.module.css";

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleUpdateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className={task.mainDiv}>
      <h2>To-do Tasks</h2>
      <input
        className={task.input}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className={task.addBtn} onClick={handleAddTask}>
        Add Task
      </button>
      <div>
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid",
              padding: "1rem",
              borderRadius: "1rem",
              margin: "2rem",
            }}
          >
            <div>{task}</div>
            <div>
              <button
                style={{
                  color: "blue",
                  marginRight: "1rem",
                  padding: ".4rem",
                }}
                onClick={() => handleDeleteTask(index)}
              >
                ❌
              </button>
              <button
                style={{ color: "blue", padding: ".5rem" }}
                onClick={() => {
                  const updatedTask = prompt("Enter updated task:", task);
                  if (updatedTask !== null) {
                    handleUpdateTask(index, updatedTask);
                  }
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
