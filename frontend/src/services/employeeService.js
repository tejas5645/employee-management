import axios from "axios";
import api from "./api";



export async function getEmployees() {

    const response = await api.get("/employees");

    return response.data;
}


export async function createEmployee(employee) {
    const response = await fetch("http://localhost:5000/api/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });


    if (!response.ok)
        throw new Error("Error adding Employees")


    const data = await response.json();

    return data;
}

export async function getEmployee(id) {

    const response = await api.get(`/employees/${id}`);



    return response.data;
}