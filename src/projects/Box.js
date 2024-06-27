
import './board.css'

function Box({value, onboxclick}) {
  return( 
  <>
  <button className='btn' onClick={onboxclick}>{value}</button>
  </>
  )
}

export default Box