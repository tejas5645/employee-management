import api from "./api";

export async function Login(user) {

    const response = await api.post("/login", user)

    return response.data


}

export async function Register(user) {

    const response = await api.post("/register", user)

    return response.data
}