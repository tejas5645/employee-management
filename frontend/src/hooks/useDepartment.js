import { useEffect, useState } from "react";
import { getDepartmentById } from "../services/departmentService";

export default function useDepartment(id) {



    const [department, setDepartment] = useState(null);


    async function loadDepartment() {

        const data = await getDepartmentById(id)

        setDepartment(data);
    }

    useEffect(() => {

        loadDepartment();
    }, [id]);






    return {
        department
    }




}