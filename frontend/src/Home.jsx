import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
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
              <li><Link to="/login">Login</Link></li>

            </ul>
          </nav>
        </div>
      </header>
      <h1>Employee Management System</h1>
      <p>
        Streamline your workspace operations, manage team members, and view employee profiles with an intuitive modern dashboard.
      </p>
      <div>
        <Link to="/employees">
          Employee List
        </Link>
        <Link to="/about">
          About System
        </Link>
      </div>
    </div>
  );
}
