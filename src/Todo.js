import React from 'react'

export default function Todo({todo, toggleTodo}) {
    const handleComplete=(e)=>{
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                {todo.name}
                <input type="checkbox" onChange={handleComplete} checked={todo.isComplete}/>
            </label>
        </div>
    )
}
