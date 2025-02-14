import React from "react";
import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Task Management System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tasks/create" className="nav-link">
                Add Task
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PageHeader;
