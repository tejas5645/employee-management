import api from "./api";

export async function getDepartments() {

    const response = await api.get("/departments")

    return response.data

}

export async function getDepartmentById(id) {

    const response = await api.get(`/departments/${id}`)

    return response.data

}


export async function addDepartment(department) {

    const response = await api.post(
        "/departments",
        department
    );

    return response.data;
}

export async function updateDepartment(id, department) {

    const response = await api.put(

        `/departments/${id}`,
        department

    )

    return response.data;

}

