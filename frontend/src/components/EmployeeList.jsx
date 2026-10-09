import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function EmployeeList({ employees }) {


    // const Employees = [{ Id: "1", Name: "Tejas" }, { Id: "2", Name: "Rahul" }]

    const navigate = useNavigate()

    return (
        <div>
            {employees && employees.length > 0 ? (
                employees.map((employee) => {
                    const initials = employee.name
                        ? employee.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
                        : 'EM';
                    return (
                        <div key={employee.id}>
                            <div>
                                <div>
                                    {initials}
                                </div>
                                <div>
                                    <h3>{employee.name}</h3>
                                    <span>{employee.role}</span>
                                </div>
                            </div>

                            <div>
                                <button onClick={() => navigate(`/employee/${employee.id}`)}>
                                    View
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>
                    <p>
                        No employees found. Click <strong>+ Add Employee</strong> to create your first record.
                    </p>
                </div>
            )}
        </div>
    )
}