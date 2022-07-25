import { useState } from "react"

function Form({addTodo}) {
    
    const [input, setInput] = useState('')

    return (
        <>
            <input 
            type="text"
            value={input}
            placeholder='insira o todo'
            onChange={(event) => setInput(event.target.value)}
            />

            <button 
            onClick={() => addTodo(input)}>
                Adicionar
            </button>
        </>
    )
}

export default Form