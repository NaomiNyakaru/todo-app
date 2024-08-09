import { useState,useEffect } from "react"
import TodoList from "../components/TodoList";

const Home = () => {
    const [todos, setTodos] = useState([])

    let baseUrl = 'http://localhost:8001/myTodos';

    useEffect(() => {
        fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => setTodos(data))
       .catch((error) => console.error('Error fetching todoList', error))
    }, [])

    console.log(todos);

    return(
        <div>
            <>list of all todos</>
            <>add todo form</>
            <div> 
            <TodoList todos={todos}/>
            </div>
        </div>
    )
}

export default Home