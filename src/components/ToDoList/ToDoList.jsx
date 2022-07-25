function TodoList({todos, handleTodo}) {
    
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button 
                    onClick={() => handleTodo(todo)}>
                        Concluir tarefa
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList