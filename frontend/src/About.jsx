import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        A sleek, responsive Employee Management application built with React. Designed with modern visual principles and smooth interaction.
      </p>
      <div>
        <Link to="/">
          Home Page
        </Link>
        <Link to="/employees">
          View Employees
        </Link>
      </div>
    </div>
  );
}
