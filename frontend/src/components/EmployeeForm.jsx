import { useState } from "react";
import { createEmployee } from "../services/employeeService";

export default function EmployeeForm({ addEmployee, setShowForm }) {

    const [name, setName] = useState("");
    const [role, setRole] = useState("");



    async function handleSubmit(e) {
        e.preventDefault();


        await addEmployee({
            name,
            role
        });

        setShowForm(false);
    }

    return (
        <div className="form-card">
            <h2 className="form-title">+ Add New Employee</h2>
            <form className="employee-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Employee Name</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Enter full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Role / Position</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Enter job role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <button className="btn btn-primary" type="submit">
                        Add Employee
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setShowForm(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}