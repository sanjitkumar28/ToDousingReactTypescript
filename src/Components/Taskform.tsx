import React, { useState,ChangeEvent ,FormEvent} from 'react'
type AddTodo = (newTodo: string) => void;
interface TodoFormProps {
    addTodo: AddTodo;
    clearTodo:ClearTodo;
}
export default function Taskform({addTodo,clearTodo}:TodoFormProps) {
    const [newTodo, setNewTodo]=useState('');
    const [searchchange,setsearchchange]=useState('');
    const[search,setsearch]=useState(false);
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
      console.log(e.target.value);
        setNewTodo(e.target.value);
    }
   const handleSubmit=(event: React.MouseEvent<HTMLElement>)=>{
    console.log('inside submit');
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo(' ');
   }
    const handleClear=(event: React.MouseEvent<HTMLElement>)=>{
        console.log('inside clear');
         event.preventDefault();
        clearTodo();
  }

 const handleSearchChange=(e:ChangeEvent<HTMLInputElement>)=>{
   console.log('inside search change');
   setsearchchange(e.target.value);
   
 }  
  const handleSearch=(event: React.MouseEvent<HTMLElement>)=>{
       event.preventDefault();
       setsearch(true)
      console.log('inside search function in taskform');   
      console.log(newTodo);
      
  }
  return (
    <>
      <div className='header'>
               <h1>MY DO TO APP</h1>
           </div>
           <form className="form" >
             {
               search?(
                <input
                type="text"
                 placeholder="Search Your Item..."
                 className="task-input"
                 onChange={handleSearchChange}
                 />
               ):
             (
              <input
              type="text"
               placeholder="Add Your To Do"
               value={newTodo}
               className="task-input"
               onChange={handleChange} />
             )
            
             }
              
               <div className="buttons">
               <button type="submit" className="btn add-task-btn"onClick={handleSubmit} >Submit
             </button>
              <button className="btn clear-btn" onClick={handleClear}>
               Clear
           </button>
           <button className="btn clear-btn" onClick={handleSearch}>
               Search
           </button>
           <button className="btn clear-btn">
               Sort
           </button>
         </div>
        </form>
    </>
  )
}
