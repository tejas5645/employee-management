import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Login } from "../services/authService"

export default function LoginPage() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    async function handleSubmit(e) {

        e.preventDefault()

        console.log(email)
        console.log(password)

        const payload = {
            email,
            password
        }

        try {
            const response = await Login(payload)

            console.log(response)


            setEmail("")
            setPassword("")


            navigate("/home")


        } catch (error) {
            console.error("Error In Login", error)
        }





    }



    return (

        <div>

            <form onSubmit={handleSubmit}>



                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />


                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>






            </form>


            <Link to="/register">
                Don't have an account? Register
            </Link>

        </div>
    )
}

