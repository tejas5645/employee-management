import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Register } from "../services/authService"

export default function RegisterPage() {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function handleSubmit(e) {

        e.preventDefault()

        const payload = {
            name: name,
            email: email,
            password: password
        }

        try {
            const data = await Register(payload)
            console.log(data)

            setName("")
            setEmail("")
            setPassword("")
        }
        catch (error) {
            console.error("Error In Register", error)
        }







    }

    return (

        <div>

            <form onSubmit={handleSubmit}>



                <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />

                <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                <input type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Register</button>

            </form>

            <Link to="/login">
                Already have an account? Login
            </Link>




        </div>
    )

}