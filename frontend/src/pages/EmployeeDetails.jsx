import { useParams, Link } from "react-router-dom"
import { getEmployee } from "../services/employeeService";
import { useState, useEffect } from "react";

export default function EmployeeDetails() {

    const { id } = useParams()

    const [employee, setEmployee] = useState(null)

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    async function loadEmployee() {

        try {

            setLoading(true)

            const data = await getEmployee(id)

            setEmployee(data)

        }
        catch (error) {

            setError(error)

        }
        finally {

            setLoading(false)

        }


    }


    useEffect(() => {

        loadEmployee()

    }, [])

    if (error)
        return (
            <div className="page-container">
                <div className="error-container">
                    <div className="error-card">
                        <p>Error Loading Employee !!!!</p>
                        <Link to="/employees" className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>
                            ← Back to Directory
                        </Link>
                    </div>
                </div>
            </div>
        );

    if (loading)
        return (
            <div className="page-container">
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p className="loading-text">Loading Employee...</p>
                </div>
            </div>
        );

    const initials = employee && employee.name
        ? employee.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
        : 'EM';

    return (
        <div className="page-container">
            <div className="details-container">
                {employee && (
                    <div className="details-card">
                        <div className="details-avatar">
                            {initials}
                        </div>
                        <h2 className="details-name">{employee.name}</h2>
                        <span className="role-badge">{employee.role}</span>

                        <div className="details-grid">
                            <div className="detail-item">
                                <span className="detail-label">Employee ID</span>
                                <span className="detail-value">#{employee.id}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Full Name</span>
                                <span className="detail-value">{employee.name}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Designation / Role</span>
                                <span className="detail-value">{employee.role}</span>
                            </div>
                        </div>

                        <Link to="/employees" className="btn btn-secondary">
                            ← Back to Directory
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}