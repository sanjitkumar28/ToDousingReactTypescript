import React from 'react'
import TaskList from './TaskList'
interface TodoListProps {
    todos: Array<Todo>;
    todoDelete:(id:number)=>void
    todoEdit:(id:number,text:string)=>void;
}
export default function Task({ todos,todoDelete,todoEdit}:TodoListProps) {
  return (
    <ul>
        <ul>
            {todos.map(todo => (
         <TaskList
          key={todo.id}
          todo={todo}
          todoDelete={todoDelete}
          todoEdit={todoEdit}
        />
     ))}
     </ul>
    </ul>
  )
}
