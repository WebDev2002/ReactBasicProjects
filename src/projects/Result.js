import './Quize.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

function Result(props) {

  return (
    <>
     
    <div className='resultboard'>
     
      <h1>Result</h1>
        <p>Total Question : {props.total}</p>
        <p><FontAwesomeIcon className='R-icon Ricon' icon={faCheck} /> {props.rightanswer}</p>
        <p><FontAwesomeIcon className='R-icon Wicon' icon={faXmark} /> {props.wronganswer}</p>
        <button className='resetBtn' onClick={props.resetbtn}>Restart</button>
        
    </div>
    </>
  )
}

export default Result