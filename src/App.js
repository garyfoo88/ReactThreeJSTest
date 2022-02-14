import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";

function App() {
  return (
    <>
      <Router>
        <Link to="project">Project 1</Link>
        <Link to="project2">Project 2</Link>
        <Link to="project3">Project 3</Link>
        <Link to="project4">Project 4</Link>
        <Routes>
          <Route path="project" element={<Project />} />
          <Route path="project2" element={<Project2 />} />
          <Route path="project3" element={<Project3 />} />
          <Route path="project4" element={<Project4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
