import React, { useState,ChangeEvent ,FormEvent, useEffect} from 'react'
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import SortResult from './SortResult';
type AddTodo = (newTodo: string) => void;
interface TodoFormProps {
    addTodo: AddTodo;
    clearTodo:ClearTodo;
    todoSearch:TodoSearch;
    todosort:Todosort;
}
export default function Taskform({addTodo,clearTodo,todoSearch,todosort}:TodoFormProps) {
    const [newTodo, setNewTodo]=useState('');
    const [searchchange,setsearchchange]=useState('');
    const[search,setsearch]=useState(false);
    const[sort,setsort]=useState(false);
    // const[sort,setsort]=
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
    // console.log('inside search change');
    // setsearchchange(e.target.value);
    // console.log(searchchange);
    
    todoSearch(e.target.value);
  }  
  const sortupdate=(status:boolean)=>{
    setsort(status);
  }
  const handleSort=(event: React.MouseEvent<HTMLElement>)=>{
    event.preventDefault();
    sortupdate(true);
    todosort(sort);
  }
  const handleUnSort=(event: React.MouseEvent<HTMLElement>)=>{
    event.preventDefault();
    setsort(false)
    todosort(sort);
  }
  // const handleSearch=(event: React.MouseEvent<HTMLElement>)=>{
      
  //     console.log('inside search function in taskform');    
  //     console.log(searchchange);
  
  // }
  return (
    <>
      <div className='header'>
               <h1>MY DO TO APP</h1>
           </div>
           
           
           {/* <form>   
            <input type="text" placeholder=" Search...." name="search">   
           <button type="submit">Submit</button>   
          </form> */}
           
           <form className="form" >
             {/* {
               search?(
                <input
                type="text"
                 placeholder="Search Your Item..."
                 className="task-input"
                 onChange={handleSearchChange}
                 />
               ): */}
             
              <input
              type="text"
               placeholder="Add Your To Do"
               value={newTodo}
               className="task-input"
               onChange={handleChange} />
               <div className='search'>
                <input type="text"
                    placeholder=" Search..."
                    name="search"
                    onChange={handleSearchChange}
                    />
                {/* <button onClick={handleSearch}>
                    <i className="fa fa-search"
                        style={{fontSize: "18px"}}>
                    </i>
                </button> */}
            
               </div>
              
              
               <div className="buttons">
               <button type="submit" className="btn add-task-btn"onClick={handleSubmit} >Submit
             </button>
              <button className="btn clear-btn" onClick={handleClear}>
               Clear
           </button>
           {/* <button className="btn clear-btn" onClick={handleSearch}>
               Search
           </button> */}
           <button className="btn clear-btn" onClick={handleSort}>
               Sort 
           </button>
           {/* <button>
           <Link to="/sortresult" style={{ color: '#FFF',textDecoration: 'none' }}>Sort</Link>
           </button> */}
             
           <button className="btn clear-btn" onClick={handleUnSort}>
               UnSorted 
           </button>
         </div>
        </form>
       
    </>
  )
}
