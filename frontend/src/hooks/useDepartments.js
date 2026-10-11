import { useEffect, useState } from "react";
import { getDepartments, addDepartment, updateDepartment } from "../services/departmentService";

export default function useDepartments() {


    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);







    const [departments, setDepartments] = useState([])


    async function getDepartmentList() {

        try {

            setLoading(true)
            const res = await getDepartments()
            setDepartments(res)

        }
        catch (error) {

            setError(error)

        }
        finally {

            setLoading(false)

        }
    }



    useEffect(() => {

        getDepartmentList()

    }, [])

    async function createDepartment(department) {

        const data = await addDepartment(department)

        setDepartments(prev => [...prev, data]);

    }

    async function editDepartment(id, department) {

        const data = await updateDepartment(id, { name: department.name })

        setDepartments(prev =>
            prev.map(department => {
                if (department.id === id) {
                    return data;
                }

                return department;
            })
        );

    }



    return {
        departments,
        createDepartment,
        loading,
        error,
        editDepartment
    }










}