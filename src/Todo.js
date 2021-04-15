import React from 'react'

export default function Todo({todo}) {
   
    return (
        <div>
            <label>
                {todo.name}
                <input type="checkbox" checked={todo.isComplete}/>
            </label>
        </div>
    )
}
