import { useNavigate } from "react-router-dom"

export default function DeparmentList({ departments, setDepartmentToEdit, setShowForm }) {

    const navigate = useNavigate()



    return (
        <div>



            {departments.map((deparment) => (


                <div key={deparment.id}>

                    <p>
                        {deparment.name}

                        <button
                            onClick={() => navigate(`/departments/${deparment.id}`)}
                        >
                            View
                        </button>

                        <button onClick={() => {
                            setDepartmentToEdit(deparment);
                            setShowForm(true);
                        }}>
                            Edit
                        </button>
                    </p>
                </div>



            ))}




        </div>
    )
}