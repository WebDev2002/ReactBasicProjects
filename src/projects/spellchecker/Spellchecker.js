import axios from 'axios'
import React, { useState } from 'react'
import './Spellchecker.css'
import { matches } from 'validator'

function Spellchecker() {
    const [text, setText] = useState('')
    const [error, setErros] = useState([])
    const [message, setMessage] = useState('')

    const getmessage = (e)=>{
       const newText = e.target.value
       setText(newText);
       checkespellAndgrammar(newText)
    }

    const checkespellAndgrammar = async(text)=>{
        try {
            const response = await axios.post('https://api.languagetool.org/v2/check', {
                text:text,
                language:'en-US'
            })
            console.log(response.data.matches)
        } catch (error) {
             console.log(error)
        }
    }

    const errorRender = ()=>{
        return error.map((e, index)=>{
           <li key={index}>
              {e.message} - {e.context.text}
           </li>
        })
    }

  return (
    <div>
        <textarea onChange={getmessage} value={text}>

        </textarea>
         <div>
            error:
            <li>{errorRender()}</li>
         </div>
    </div>
  )
}

export default Spellchecker