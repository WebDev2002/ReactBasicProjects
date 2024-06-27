import React, { useState } from 'react'
import './Jokes.css'
import image from './emoji-laughing.gif';


function Jokegen() {
    const [joke, setJoke] = useState("Let's Laugh");

    const fetchjoke = ()=>{
 fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
 .then((res)=>res.json())
 .then((data)=>setJoke(data.joke))
    }
  return (
    <div className='jokesgen'>
      <p><img src={image} alt='' />{joke}<img src={image} alt='' /></p>
      <br/>
      <br/>
      <button className='btn' onClick={fetchjoke}>Click to laugh</button>
    </div>
  )
}

export default Jokegen