import React, { useState } from 'react';
import './App.css';
import Taskform from './Components/Taskform';
import Task from './Components/Task';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import SortResult from './Components/SortResult';
function App() {
 const[todos,setTodos]=useState<Array<Todo>>([]);
 const[result,searchresult]=useState<Array<Todo>>([])
 const[sortresult,setsortresult]=useState<Array<Todo>>([])
 const[sortval,setsort]=useState(false);
  const addTodo:AddTodo=(newTodo)=>{
    console.log('inside to do');
    const newTod:string=newTodo.trim();
      if(newTod.length>0)
      setTodos([...todos, { text: newTod, complete: false,id:todos.length+1 }]);
  }
  const clearTodo:ClearTodo=()=>{
    console.log('inside clear');
   setTodos([])
   searchresult([])
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
  const todoSearch:TodoSearch=(text)=>{
        console.log('inside search at app');
        console.log(text,'text passed to search');
        if(text.length>0){
          const output=todos.filter((todo)=>{
            if(todo.text.toLowerCase().includes(text.toLowerCase())){
              return todo;
            }
     })
    //  console.log(todos,'checking todo state in filter ');
     searchresult(output)
     }
     else{
       searchresult([])
     }
        
  }
  const todosort:Todosort=(sortstatus)=>{
    console.log('inside sort in app');
    console.log('sortstatus',sortstatus);
    setsort(sortstatus);
     if(sortval==true)
     {
      const output=todos.sort((a,b)=>a.text.localeCompare(b.text));
      setsortresult(output);
     } 
  }
  // const todosort:Todosort=(sortstatus)=>{
    // setsort(sortstatus);
  //   console.log('inside sort');
    
  //    if(sortval==true)
  //    {
  //     const output=todos.sort((a,b)=>a.text.localeCompare(b.text));
  //     setTodos(output);
  //    } 
  // }
  return (
    <>
   {console.log('render')}
    <Taskform addTodo={addTodo} clearTodo={clearTodo} todoSearch={todoSearch} todosort={todosort}/>
    {
       sortval===false?
        <Task todos={result.length<1?todos:result}  todoDelete={todoDelete}  todoEdit={todoEdit} />
       :
       (  <Task todos={result.length<1?sortresult:result}  todoDelete={todoDelete}  todoEdit={todoEdit} />)
    }
     {/* <Task todos={result.length<1?todos:result}  todoDelete={todoDelete}  todoEdit={todoEdit} /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/sortresult" element={<SortResult />} />
      </Routes>
  </BrowserRouter> 
    </>
  );
}

export default App;
