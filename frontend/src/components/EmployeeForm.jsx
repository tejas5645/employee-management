import { useState } from "react";
import { createEmployee } from "../services/employeeService";

export default function EmployeeForm({ addEmployee, setShowForm, saving, saveError }) {

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
        <div>
            <h2>+ Add New Employee</h2>
            <form onSubmit={handleSubmit}>
                {
                    saveError && (
                        <p>Failed to save employee</p>
                    )
                }
                <div>
                    <div>
                        <label>Employee Name</label>
                        <input
                            type="text"
                            placeholder="Enter full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Role / Position</label>
                        <input
                            type="text"
                            placeholder="Enter job role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button type="submit" disabled={saving}>
                        {saving ? "Saving..." : "Save Employee"}
                    </button>

                    <button
                        type="button"
                        onClick={() => setShowForm(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}