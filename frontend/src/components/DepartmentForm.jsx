import { useState } from "react";

export default function DepartmentForm({ setShowForm, createDepartment }) {

    console.log("Child Render", createDepartment)


    const [name, setName] = useState("");




    async function handleSubmit(e) {

        e.preventDefault();

        const department = {
            name
        }

        await createDepartment(department)

        setShowForm(false);
    }

    return (

        <div>


            <form onSubmit={handleSubmit}>



                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Department Name" />


                <button type="submit" >Add Department</button>




            </form>






        </div>



    )

}