import React, { useState } from 'react'
import qBank from './Questionbank'
import './Quize.css';
import Result from './Result';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

function Quizeapp() {

  const [questions, setQuestion] = useState(0);
  const [selectopt, setSelectopt] = useState(0);
  const [rightans, setRightans] = useState(0);
  const [wrongans, setWrongans] = useState(0);
  const [score, setScore] = useState(false);
  const [select, setSelect] = useState(false);




  const submit = () => {
    if (questions < qBank.length - 1) {
      setQuestion(questions + 1);

    } else {
      setScore(true);
    }

    if (select === true) {
      if (qBank[questions].options[selectopt] === qBank[questions].answer) {
        setRightans(rightans + 1);

      }
      else {
        setWrongans(wrongans + 1);
      }


    }
    else {
      setWrongans(wrongans + 1);

    }
    setSelect(false)

  }

  const [reset, setReset] = useState(false)
  const restartbtn = () => {
    setReset(true)
  }


  return (
    <>
      {reset ? (<Quizeapp />) : <>

        <div className='quizebox'>

          {score ? (<Result total={qBank.length} rightanswer={rightans} wronganswer={wrongans} resetbtn={restartbtn} />) : <>
            <h2>Quize App</h2>
            <p className='rigntAndwrong'><span><FontAwesomeIcon className='icon Ricon' icon={faCheck} />{rightans}</span> <span><FontAwesomeIcon className='icon Wicon' icon={faXmark} />{wrongans}</span> </p>
            <p className='question'>Q{qBank[questions].id} . {qBank[questions].question}</p>
            <div className='optbox'>
              {qBank[questions].options.map((e, index) => {
                return (
                  <>
                    <div className='options' >
                      <label key={index}>
                        <input type='radio' name='opt' className='optinput' value={index} checked={select} onClick={() => setSelect(true)} onChange={(i) => setSelectopt(i.target.value)} />
                        {e}</label>
                    </div>
                  </>
                )
              })}
            </div>
            <p className='Que-number'>{qBank[questions].id} of {qBank.length}</p>
            <button className='btn' onClick={submit}>Submit</button>
          </>}
        </div>
      </>}
    </>
  )
}

export default Quizeapp;