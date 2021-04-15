import TodoList from "./TodoList";
import {useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, settodos] = useState([])
  const todoNameRef=useRef();
  
  const toggleTodo=(id)=>{
    const newTodos=[...todos];
    const todo=newTodos.find(todo=>todo.id === id)
    todo.isComplete=!todo.isComplete
    settodos(newTodos);
  }
  const handleAddTodo=(e)=>{
    const name = todoNameRef.current.value
    if( name=== '') return
    settodos(prevTodos=>{
      return [...prevTodos,{
        id:uuidv4(),
        name: name,
        isComplete: false
      }]
    })
  }
  const clearTodos=(e)=>{
    settodos([]);
  }
  return (
    <div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
     <div >
       <input ref={todoNameRef} type="text" placeholder="Enter Todo"/>
      </div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear All Todos</button>
      </div>
      <TodoList toggleTodo={toggleTodo} todos={todos}/>
    </div>
  );
}

export default App;
