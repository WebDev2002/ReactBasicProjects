import React from 'react'
import './Jokes.css'
import Jokegen from './Jokegen'
import image from './lmao-haha.gif';

function Jokesdis() {
  return (
    <div className='jokesbox'>
    <h1>Jokes that make you laugh</h1>
    <img src={image} alt='' />
    <br/>
    <Jokegen />
    </div>
  )
}

export default Jokesdis