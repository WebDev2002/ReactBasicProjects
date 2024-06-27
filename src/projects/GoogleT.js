  import React, {useEffect, useState } from 'react'
 import axios from 'axios';
 import GoogleTanimation from './GoogleTanimation';
import './googleT.css'
 import countryname from './Countryname'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons'

function GoogleT() {

   const [from, setFrom] = useState("en");
   const [to, setTo] = useState("hi");
   const [message, setMessage] = useState([]);
  const [showmessage, setShowmessage] = useState([]);
  const [loading, setLoading] = useState(false)

 
 

  const handleTranslate = async () => {
     if(setShowmessage("")){
      setLoading(false)
     }else{
    setLoading(true)
  try {
    const encodeMessage = encodeURIComponent(message)
    const encodeFrom = encodeURIComponent(from)
    const encodeTo = encodeURIComponent(to)
    const response = await axios.get(`https://lingva.ml/api/v1/${encodeFrom}/${encodeTo}/${encodeMessage}`);
    setShowmessage(response.data.translation);
    console.log(response.data.translation)
  } catch (error) {
    console.error('Error translating text:', error);
  } finally{
    setLoading(false)
  }
}
  };

 
  const getFrom = (e)=>{
    const valueOFfrom = e.target.value;
    setFrom(valueOFfrom)
   }

   const getTo = (e)=>{
    const valueOFto = e.target.value;
    setTo(valueOFto)
   }


  const check = (event)=>{
    setMessage(event.target.value)
  }

  useEffect(()=>{
    if(message===''){
      setShowmessage("")
    }
  },[message])

 

const optChange = () =>{
  setShowmessage("")
}

const swapLanguage = ()=>{
  setTo(from)
  setFrom(to)
}

  

 

  return (
    <>
    <h1>Google Translate</h1>
    <div className='main-box'>
      <div className='opt-box'>
<select value={from} onChange={getFrom}>
 {countryname.map((e, index)=>{
  return <option key={index} value={e.Ccode} >{e.Cname}</option>
 })}
</select>
<span onClick={swapLanguage} className='swapLanguage'><FontAwesomeIcon icon={faArrowRightArrowLeft} /></span>
    <select value={to}  onClick={optChange} onChange={getTo}>
    {countryname.map((e, index)=>{
  return <option key={index} value={e.Ccode} >{e.Cname}</option>
 })}
</select>
</div>
<div className='text-box' >
<textarea type='input' placeholder='Text' value={message} onKeyDown={(e)=>{
  if(e.key==='Enter'){
    handleTranslate()
  }
}} onChange={check}/>
{loading ? (<GoogleTanimation />):<></>}
       <textarea type='text' value={showmessage} readOnly ></textarea>
       </div>
<button onClick={handleTranslate} className='btn' disabled={loading}>Translate</button>

    </div>
</>

    
  )
}
export default GoogleT


