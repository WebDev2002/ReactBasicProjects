import React from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
const navigater = useNavigate();
    const next = ()=>{
     navigater('/form2')
    }

  return (
    <div>
        <h3>User Details</h3>
        <div className='details'>
        <label>Name
            <input type='text' />
        </label>
        <label>Email
            <input type='text' />
        </label>
        <label>Contact
            <input type='number' />
        </label>
        <label for="gender">Gender:</label>
  <select id="gender" name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
        <button onClick={next}>Next</button>
        </div>
    </div>
  )
}

export default Form