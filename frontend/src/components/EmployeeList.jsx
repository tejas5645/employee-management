import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function EmployeeList({ employees }) {


    // const Employees = [{ Id: "1", Name: "Tejas" }, { Id: "2", Name: "Rahul" }]

    const navigate = useNavigate()

    return (
        <div className="employee-grid">
            {employees && employees.length > 0 ? (
                employees.map((employee) => {
                    const initials = employee.name
                        ? employee.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
                        : 'EM';
                    return (
                        <div className="employee-card" key={employee.id}>
                            <div className="employee-card-header">
                                <div className="avatar-circle">
                                    {initials}
                                </div>
                                <div className="employee-card-body">
                                    <h3 className="employee-name">{employee.name}</h3>
                                    <span className="role-badge">{employee.role}</span>
                                </div>
                            </div>

                            <div className="employee-card-footer">
                                <button className="btn btn-primary btn-sm" onClick={() => navigate(`/employee/${employee.id}`)}>
                                    View
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="glass-card empty-state" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 1.5rem' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                        No employees found. Click <strong>+ Add Employee</strong> to create your first record.
                    </p>
                </div>
            )}
        </div>
    )
}