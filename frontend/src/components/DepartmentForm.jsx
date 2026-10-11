import { useState } from "react";

export default function DepartmentForm({ setShowForm, createDepartment, department, editDepartment }) {


    const [name, setName] = useState(department ? department.name : "");




    async function handleSubmit(e) {

        e.preventDefault();

        if (department == null) {
            const department = {
                name
            }
            await createDepartment(department)

        }
        else {
            await editDepartment(department.id, { name });
        }




        setShowForm(false);
    }

    return (

        <div>


            <form onSubmit={handleSubmit}>



                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Department Name" />


                <button type="submit" >{department ? "Update Department" : "Add Department"}</button>






            </form>






        </div>



    )

}