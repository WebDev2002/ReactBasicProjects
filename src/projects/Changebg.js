import React, {  useState } from 'react'
import './changebg.css';
function Changrbg() {


      const [color, setColor] = useState("#BAFA01");
  
  return (
    <>
    <h2 style={{color:color}}>BackgroundColor Changer</h2>
    <div style={{width:"325px", height:"350px", border:`1px solid ${color}`, borderRadius:"10px", backgroundColor:color}} >
      
    </div>
     <button className='btn btn1' onClick={()=>setColor("red")}>Red</button>
     <button className='btn btn2' onClick={()=>setColor("yellow")}>yellow</button>
     <button className='btn btn3' onClick={()=>setColor("blue")}>blue</button>
     <button className='btn btn4' onClick={()=>setColor("black")}>black</button>
     <button className='btn btn5' onClick={()=>setColor("green")}>green</button>
    </>
  )
}

export default Changrbg