import { useState, useEffect } from "react";
import { getEmployees, createEmployee } from "../services/employeeService";


export default function useEmployees() {

    const [employees, setEmployees] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    async function getEmployeesList() {

        try {
            setLoading(true);

            const data = await getEmployees();
            setEmployees(data);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getEmployeesList();
    }, []);

    async function addEmployee(employee) {

        const data = await createEmployee(employee);

        console.log(data);

        setEmployees(prev => [...prev, data]);

    }

    return {
        employees,
        setEmployees,
        loading,
        setLoading,
        error,
        setError,
        getEmployeesList,
        addEmployee
    };



}