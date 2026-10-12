import { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Employees from "./pages/Employees";
import EmployeeDetails from "./pages/EmployeeDetails";
import Departments from "./pages/Departments";
import DepartmentDetails from "./pages/DepartmentDetails";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Layout for the main application
function AppLayout() {
  return (
    <>
      {/* <header>
        <div>
          <Link to="/home">
            <span>EMS</span>
            <span>EmployeeHub</span>
          </Link>

          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/employees">Employees</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/departments">Departments</Link></li>
            </ul>
          </nav>
        </div>
      </header> */}

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages: no application header */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Main application: header and navigation */}
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<DepartmentDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}