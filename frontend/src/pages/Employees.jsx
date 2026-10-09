import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import useEmployees from "../hooks/useEmployees";

export default function Employees() {

    const {
        employees,
        loading,
        error,
        addEmployee
    } = useEmployees();

    const [showForm, setShowForm] = useState(false);


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
                    addEmployee={addEmployee}
                    setShowForm={setShowForm}
                    saving={saving}
                    saveError={saveError}
                />

            )}

            <EmployeeList employees={employees} />

        </div>
    )
}