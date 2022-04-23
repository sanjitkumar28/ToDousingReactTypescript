import React, { useState, ChangeEvent} from 'react'
interface TodoListItemProps {
    todo: Todo;
    todoDelete:(id:number)=>void;
    todoEdit:(id:number,text:string)=>void;
}
export default function TaskList({todo,todoDelete,todoEdit}:TodoListItemProps) {
  const [editToDoText,seteditToDoText]=useState(' ');
  const[editToDo,editToDoChange]=useState(false)
  const handleDelete=(id:number)=>{
      console.log('inside handle delete');
      console.log(id);
      todoDelete(id);
  }
 
  const changeToDo=()=>{
    editToDoChange(true);
  }
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    seteditToDoText(e.target.value)
     console.log(editToDoText);
  }
const onEditSubmit=(id:number)=>{
  todoEdit(id,editToDoText);
  editToDoChange(false);
}
  return (
      <ul>
           <li className="todo-row">
      <label>
      {/* <input
        type="checkbox"
        />{todo.text} */}
        {
          todo.id
        }
        </label>
        {
          editToDo?(<input type="text"  value={editToDoText} onChange={handleChange}/>):
          todo.text
        }
        {
              editToDo?(<button onClick={()=>onEditSubmit(todo.id)} >Submit</button>):
              (<button onClick={changeToDo} >Edit</button>)  
        }
       
        <button onClick={()=>handleDelete(todo.id)}>delete</button>
         </li>  
    </ul>
  )
}
