import './Todo.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
function Todo() {
    const [list, setList] = useState("");
    const [addlist, setAddlist] = useState([]);

     function get(e){
      
      setList(e.target.value);
     }

  
 const add = ()=>{
    setAddlist([...addlist, list]);
     setList([]);
  
 }

 

 const deletTodo = (addlists)=>{
const remove = addlist.filter((lists)=> lists!==addlists);
setAddlist(remove)
 }

  return (
    <div className='todo-book'>
      <h1>To-do List</h1>

    <input type='text' className='txtbox' value={list}  onChange={get} onKeyDown={(e) => {
        if (e.key === "Enter"){
            add();
        }
        }}/>
    <button onClick={add} className='addlistbtn'><FontAwesomeIcon className='addIcon' icon={faPlus} /></button>
       {addlist.map((addlists,index)=><li key={index} className='todoItems'>{addlists}
       <span onClick={()=>deletTodo(addlists)} className='deletebtn'><FontAwesomeIcon className='deleteBtn' icon={faTrash} /></span>
       </li>)}
       </div>

  )
}

export default Todo