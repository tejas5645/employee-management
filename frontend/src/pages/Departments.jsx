import { useEffect, useState } from "react";
import DeparmentList from "../components/DeparmentList";
import DepartmentForm from "../components/DepartmentForm";
import useDepartments from "../hooks/useDepartments";


export default function Departments() {





    const [showForm, setShowForm] = useState(false)

    const {
        departments,
        createDepartment,
        loading,
        error
    } = useDepartments();


    if (loading) return <h1>Loading ...</h1>

    if (error) return <h1>Error ...</h1>





    return (
        <div>

            <button onClick={() => setShowForm(true)}>Add Department</button>

            {showForm && <DepartmentForm setShowForm={setShowForm} createDepartment={createDepartment} />}


            <DeparmentList departments={departments} />
        </div>
    );
}