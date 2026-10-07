import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Employees from "./pages/Employees"
import EmployeeDetails from "./pages/EmployeeDetails";
import "./App.css";
import Departments from "./pages/Departments";
import DepartmentDetails from "./pages/DepartmentDetails";

export default function App() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <div className="header-container">
          <Link to="/" className="brand-logo">
            <span className="brand-icon">EMS</span>
            <span>EmployeeHub</span>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/employees" className="nav-link">Employees</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/departments" className="nav-link">Departments</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<DepartmentDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}