import React, { useState } from 'react'

function Form() {
    const [userinput, setUserinput] = useState("");
    const getdata = ()=>{
      if(userinput === ""){
        alert("Enter your name");
      }
      else{
        alert(`Your name is ${userinput}`);
      }
    }
  return (
    <>
     <form onSubmit={getdata}>
        <input type='text' value={userinput} onChange={(e)=>setUserinput(e.target.value)} placeholder='Name' />
        <input type='submit' />
     </form>
    </>
  )
}

export default Form