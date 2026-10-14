
import { Link } from "react-router-dom";

export default function Home() {

  const totalEmployees = 25;
  const totalDepartments = 5;

  return (
    <div>
      <h1>Employee Management System</h1>

      <p>
        Streamline your workspace operations, manage team members,
        and view employee profiles with an intuitive modern dashboard.
      </p>

      <h2>Dashboard Overview</h2>

      <div>
        <h3>Total Employees</h3>
        <p>{totalEmployees}</p>
      </div>

      <div>
        <h3>Total Departments</h3>
        <p>{totalDepartments}</p>
      </div>

      <div>
        <Link to="/employees">Employee List</Link>
        {" | "}
        <Link to="/about">About System</Link>
      </div>
    </div>
  );
}
