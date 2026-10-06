import { useEffect, useState } from "react";
import { getEmployee } from "../services/employeeService";

export default function useEmployee(id) {


    const [employee, setEmployee] = useState(null)

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    async function loadEmployee() {

        try {

            setLoading(true)

            const data = await getEmployee(id)

            setEmployee(data)

        }
        catch (error) {

            setError(error)

        }
        finally {

            setLoading(false)

        }


    }

    useEffect(() => {

        loadEmployee()

    }, [])


    return {
        employee,
        setEmployee,
        loading,
        setLoading,
        error,
        setError,
        loadEmployee
    };


}