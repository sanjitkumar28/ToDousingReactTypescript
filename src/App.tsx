import React, { useState } from 'react';
import './App.css';
import Taskform from './Components/Taskform';
import Task from './Components/Task';

function App() {
 const[todos,setTodos]=useState<Array<Todo>>([]);
  const addTodo:AddTodo=(newTodo)=>{
    console.log('inside to do');
    const newTod:string=newTodo.trim();
      if(newTod.length>0)
      setTodos([...todos, { text: newTod, complete: false,id:todos.length+1 }]);
  }
  const clearTodo:ClearTodo=()=>{
    console.log('inside clear');
   setTodos([])
  }
  const todoDelete:TodoDelete=(id)=>{
    // console.log('inside delete');
    // console.log(todos);
    // const newtodo=todos.slice(id,1);
    // console.log(newtodo);
    // setTodos(newtodo);
    const output=todos.filter((todo)=>{
      return todo.id!==id;
    })
    setTodos(output);
  }
  
  const todoEdit:TodoEdit=(id,newtext)=>{
    const output=todos.map((todo)=>{
      if(todo.id===id){
        todo.text=newtext;
      }
    return todo;  
    })
     setTodos(output);
  }
  
  return (
    <>
    <Taskform addTodo={addTodo} clearTodo={clearTodo}/>
     <Task todos={todos}  todoDelete={todoDelete}  todoEdit={todoEdit} />
    </>
  );
}

export default App;
