import TodoList from "./TodoList";
import {useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
const LOCAL_STORAGE_KEY="SAJAL.TODOS.123"

function App() {
  const [todos, settodos] = useState([])
  const todoNameRef=useRef();
  
  useEffect(()=>{
    const stored= localStorage.getItem(LOCAL_STORAGE_KEY)
    if(stored) settodos(JSON.parse(stored));
 },
 []);

  useEffect(()=>{
     localStorage.setItem(LOCAL_STORAGE_KEY,
      JSON.stringify(todos)
      )
  },
  [todos]);
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
  const clearCompleteTodos=(e)=>{
    const newTodos=todos.filter(todo=>!todo.isComplete)
    settodos(newTodos)
  }
  return (
    <div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
     <div >
       <input ref={todoNameRef} type="text" placeholder="Enter Todo"/>
      </div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={clearCompleteTodos}>Clear Complete</button>
      <button onClick={clearTodos}>Clear All</button>
      </div>
      <div>{todos.filter(todo=>!todo.isComplete).length} todos left to be Completed</div>
      <TodoList toggleTodo={toggleTodo} todos={todos}/>
    </div>
  );
}

export default App;
