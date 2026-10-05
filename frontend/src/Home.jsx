import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container">
      <div className="hero-card">
        <h1 className="hero-title">Employee Management System</h1>
        <p className="hero-description">
          Streamline your workspace operations, manage team members, and view employee profiles with an intuitive modern dashboard.
        </p>
        <div className="hero-actions">
          <Link to="/employees" className="btn btn-primary">
            Employee List
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About System
          </Link>
        </div>
      </div>
    </div>
  );
}
