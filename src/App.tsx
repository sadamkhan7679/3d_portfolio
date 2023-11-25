import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact";

function App() {
  return (
    <main className="bg-slate-300/200">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
