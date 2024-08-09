import TodoItem from "./TodoItem"

const TodoList = ({todos}) => {
    console.log('props data:', todos)

    const todosToRender = todos.map((todo) => {
        return (
            <div key={todo.id}>
                
                <TodoItem todo={todo}/>
                
            </div>
        )
    }) 
    return (
        <div> TodoList
           {todosToRender} 
            
        </div>
       
    )
}

export default TodoList;