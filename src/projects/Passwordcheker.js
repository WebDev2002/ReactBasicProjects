import React, { useState } from 'react'
import validator from 'validator';

function Passwordcheker() {
  const [checkvalue, setCheckvalue] = useState("Checking....");
  const check = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setCheckvalue("Is a strong password");
    }
    else {
      setCheckvalue("Is not a strong password");
    }
    if (value === "") {
      setCheckvalue("Checking...")
    }
  }
  return (
    <div style={{width:"350px", height:"auto", border:"1px solid", padding:"1rem 0"}}>
      <h2>Password Validator</h2>
      <input type='text' style={{ outline: "none", padding: "5px", width: "200px" }} onChange={(e) => check(e.target.value)} placeholder='Enter your password' />
      <p>{checkvalue}</p>
      <div style={{display:"flex", flexDirection:"column", height:"150px", justifyContent:"space-around", textAlign:"left", paddingLeft:"20px", paddingBottom:"10px"}}>
        <span style={{fontFamily:"cursive", fontWeight:"400", letterSpacing:"1px"}}>minLength: 8</span>
        <span style={{fontFamily:"cursive", fontWeight:"400", letterSpacing:"1px"}}>minLowercase: 1</span>
        <span style={{fontFamily:"cursive", fontWeight:"400", letterSpacing:"1px"}}>minUppercase: 1</span>
        <span style={{fontFamily:"cursive", fontWeight:"400", letterSpacing:"1px"}}>minNumbers: 1</span>
        <span style={{fontFamily:"cursive", fontWeight:"400", letterSpacing:"1px"}}>minSymbols: 1</span>
      </div>
    </div>
  )
}

export default Passwordcheker