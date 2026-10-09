import { useParams, Link } from "react-router-dom"
import useEmployee from "../hooks/useEmployee";

export default function EmployeeDetails() {

    const { id } = useParams()

    const { employee, loading, error } = useEmployee(id)



    if (error)
        return (
            <div>
                <p>Error Loading Employee !!!!</p>
                <Link to="/employees">
                    ← Back to Directory
                </Link>
            </div>
        );

    if (loading)
        return (
            <div>
                <p>Loading Employee...</p>
            </div>
        );

    const initials = employee && employee.name
        ? employee.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
        : 'EM';

    return (
        <div>
            {employee && (
                <div>
                    <div>
                        {initials}
                    </div>
                    <h2>{employee.name}</h2>
                    <span>{employee.role}</span>

                    <div>
                        <div>
                            <span>Employee ID</span>
                            <span>#{employee.id}</span>
                        </div>
                        <div>
                            <span>Full Name</span>
                            <span>{employee.name}</span>
                        </div>
                        <div>
                            <span>Designation / Role</span>
                            <span>{employee.role}</span>
                        </div>
                    </div>

                    <Link to="/employees">
                        ← Back to Directory
                    </Link>
                </div>
            )}
        </div>
    )
}