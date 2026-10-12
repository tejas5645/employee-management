import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav>
                <Link to="/employees">Employees</Link>
                <Link to="/departments">Departments</Link>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;