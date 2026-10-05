import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import { getEmployees } from "../services/employeeService";

export default function Employees() {


    const [employees, setEmployees] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);


    async function getEmployeesList() {

        try {

            setLoading(true)

            const data = await getEmployees();
            setEmployees(data);

            setEmployees(data)

        }
        catch (error) {

            setError(error)

        }
        finally {

            setLoading(false)
        }

    }

    useEffect(() => {

        getEmployeesList()

    }, [])


    if (error)
        return (
            <div className="page-container">
                <div className="error-container">
                    <div className="error-card">
                        <p>Error Loading Employees !!!!</p>
                    </div>
                </div>
            </div>
        );

    if (loading)
        return (
            <div className="page-container">
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p className="loading-text">Loading Employees...</p>
                </div>
            </div>
        );


    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-header-row">
                    <div>
                        <h1 className="page-title">Employee Directory</h1>
                        <p className="page-subtitle">Manage workspace team members and employee records</p>
                    </div>
                    <button className="btn btn-primary" onClick={(e) => setShowForm(true)}>
                        + Add Employee
                    </button>
                </div>
            </div>

            {showForm && (

                <EmployeeForm
                    setEmployees={setEmployees}
                    setShowForm={setShowForm}
                />


            )}

            <EmployeeList employees={employees} />

        </div>
    )
}