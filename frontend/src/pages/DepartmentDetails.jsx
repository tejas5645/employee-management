import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDepartmentById } from "../services/departmentService";
import useDepartment from "../hooks/useDepartment";

export default function DepartmentDetails() {

    const { id } = useParams();

    const { department } = useDepartment(id);

    // const { id } = useParams()


    // const [department, setDepartment] = useState(null);


    // async function loadDepartment() {

    //     const data = await getDepartmentById(id)

    //     setDepartment(data);
    // }

    // useEffect(() => {

    //     loadDepartment();
    // }, [id]);

    return (
        <div>



            {department && (
                <div>
                    <p>Department Id : {department.id} </p>
                    <p>Department Name : {department.name} </p>

                </div>
            )}





        </div>
    )


}