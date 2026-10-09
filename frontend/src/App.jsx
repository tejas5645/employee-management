import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Employees from "./pages/Employees"
import EmployeeDetails from "./pages/EmployeeDetails";
import Departments from "./pages/Departments";
import DepartmentDetails from "./pages/DepartmentDetails";
export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div>
          <Link to="/">
            <span>EMS</span>
            <span>EmployeeHub</span>
          </Link>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/employees">Employees</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/departments">Departments</Link></li>
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