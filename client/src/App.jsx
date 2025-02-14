import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./Components/TaskList";
import TaskCreate from "./Components/TaskCreate";
import TaskView from "./Components/TaskView";
import TaskUpdate from "./Components/TaskUpdate";
import PageHeader from "./Components/PageHeader";

const App = () => (
  <Router>
    <PageHeader />
    <div>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/list" element={<TaskList />} />
        <Route path="/tasks/create" element={<TaskCreate />} />
        <Route path="/tasks/view/:id" element={<TaskView />} />
        <Route path="/tasks/edit/:id" element={<TaskUpdate />} />
      </Routes>
    </div>
  </Router>
);

export default App;
