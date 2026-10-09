import { useNavigate } from "react-router-dom"

export default function DeparmentList({ departments }) {

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

                        <button
                            onClick={() => console.log("Edit clicked", deparment)}
                        >
                            Edit
                        </button>
                    </p>
                </div>



            ))}




        </div>
    )
}