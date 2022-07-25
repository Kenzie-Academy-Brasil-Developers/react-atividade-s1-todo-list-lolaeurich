import {useState} from "react"

import Form from "./components/Form/Form"
import TodoList from "./components/ToDoList/ToDoList"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleTodo = (removedTodo) => {
    const filteredTodos = todos.filter(todo => todo !== removedTodo)
    setTodos(filteredTodos)
  }

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
