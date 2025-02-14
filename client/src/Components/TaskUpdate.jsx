import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const TaskUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    status: "Pending",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/tasks/${id}`)
      .then((response) => setTask(response.data))
      .catch(() => alert("Task not found"));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/tasks/${id}`, task);
      alert("Task Updated Successfully");
      navigate("/tasks/list");
    } catch (error) {
      alert("Error Updating Task");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Edit Task</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Task Title:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Type your task here"
        />
        <label className="form-label">Task Status:</label>
        <select
          className="form-control"
          id="status"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit" className="btn btn-primary mt-2">
          Update Task
        </button>
        <Link to="/tasks/list" className="btn btn-light mt-2 ms-2">
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default TaskUpdate;
