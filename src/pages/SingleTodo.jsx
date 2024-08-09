import { useLocation } from "react-router-dom"


const SingleTodo = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data)
    return(
        <div>
            <h2>title: {data.title}</h2>
            <p>description:{data.description}</p>
            <p>Status: {data.isComplete ? "Complete" : "Incomplete"}</p>
        </div>
    )
}

export default SingleTodo