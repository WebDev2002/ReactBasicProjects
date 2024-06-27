import React, { useState } from 'react'
import Axios from 'axios';

function Lyric() {
    const [liyric, setLiyric] = useState();
    const [sname, setSname] = useState()
    const [aname, setAname] = useState()
    const getliyric =()=>{
         Axios.get(`https://api.lyrics.ovh/v1/${aname}/${sname}`).then(res=>{
          console.log(res.data.lyrics); 
         })
    }
  return (
    <div>
         <input type='text' placeholder='song name' onChange={(e)=>setSname(e.target.value)}/>
         <input type='text' placeholder='Artist name' onChange={(e)=>setAname(e.target.value)}/>
        {liyric}
    <button onClick={getliyric}>Find</button>
    </div>
  )
}

export default Lyric