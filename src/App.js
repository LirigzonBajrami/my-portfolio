import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectDetails from "./Pages/ProjectDetails";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/project/:id" element={<ProjectDetails />}></Route>
          <Route path="/education" element={<Education />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
