import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Project2 from "./pages/Project2";

function App() {
  return (
    <>
      <Router>
        <Link to="project">Project 1</Link>
        <Link to="project2">Project 2</Link>
        <Routes>
          <Route path="project" element={<Project />} />
          <Route path="project2" element={<Project2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
