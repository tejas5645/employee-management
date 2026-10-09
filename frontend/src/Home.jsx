import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
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
