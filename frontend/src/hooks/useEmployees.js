import { useState, useEffect } from "react";
import { getEmployees, createEmployee } from "../services/employeeService";


export default function useEmployees() {

    const [employees, setEmployees] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [saving, setSaving] = useState(false);

    const [saveError, setSaveError] = useState(null);

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

        try {
            setSaving(true);

            const data = await createEmployee(employee);

            setEmployees(prev => [...prev, data]);

        } catch (error) {
            setSaveError(error);
        } finally {
            setSaving(false);
        }
    }

    return {
        employees,
        setEmployees,
        loading,
        setLoading,
        error,
        setError,
        getEmployeesList,
        addEmployee,
        saving,
        saveError
    };



}