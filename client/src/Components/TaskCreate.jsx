import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskCreate = () => {
  const [task, setTask] = useState({
    title: "",
    status: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/tasks", task, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Task Created: ", "response.data");

      alert("Task Created Successfully");
      navigate("/tasks/list");
    } catch (error) {
      console.error(
        "Error Creating task: ",
        error.response ? error.response.data : error.message
      );
      alert("Error Creting Task");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-lable">Enter your name: </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Type your task here"
          required
        />
        <label for="status" className="form-lable">
          Task Status:
        </label>
        <select
          className="form-control"
          id="status"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option hidden>----Select Status----</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit" className="btn btn-primary mt-2">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskCreate;
