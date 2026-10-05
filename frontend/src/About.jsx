import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="page-container">
      <div className="hero-card">
        <h1 className="hero-title">About Page</h1>
        <p className="hero-description">
          A sleek, responsive Employee Management application built with React. Designed with modern visual principles and smooth interaction.
        </p>
        <div className="hero-actions">
          <Link to="/" className="btn btn-primary">
            Home Page
          </Link>
          <Link to="/employees" className="btn btn-secondary">
            View Employees
          </Link>
        </div>
      </div>
    </div>
  );
}
