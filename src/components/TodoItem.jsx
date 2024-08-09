import { Link, useNavigate } from "react-router-dom";

const TodoItem = ({todo}) => {
    const navigate = useNavigate()

    const handleNav = () => {
        //console.log('I was clicked')
        navigate('/todo/${todo.id}', {state: todo})

    }

    return(
        <div onClick={handleNav}>
        
        
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
       
        </div>
    )
}

export default TodoItem;