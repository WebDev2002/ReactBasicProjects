import React, { useState } from 'react'
import Box from './Box'
import './board.css'
import Resulttic from './Resulttic';
function Board() {
    const [nexturn, setNexturn]=useState(true);
    const [boxvalue, setBoxvalue] = useState(Array(9).fill(null))
    const [result, setResult]=useState(false)
    let status = "";
    const checkvalue = (i)=>{
       
        const next = boxvalue.slice();
        if(status || boxvalue[i]){
            return
        }
        if(nexturn){
            next[i]= "X";
        }else{
            next[i]="O";
        }
       
        setBoxvalue(next);
        setNexturn(!nexturn);
    }
 

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (boxvalue[a] && boxvalue[a] === boxvalue[b] && boxvalue[a] === boxvalue[c]) {
           status = boxvalue[a];
        }
      }

      if(status){
        setResult(true)
      }

    return (
        <>
        {result?(<Resulttic res={status} />):<>
        <div className='gameboard'>
             
            <div>
                <Box value={boxvalue[0]} onboxclick={()=>checkvalue(0)}/>
                <Box value={boxvalue[1]} onboxclick={()=>checkvalue(1)}/>
                <Box value={boxvalue[2]} onboxclick={()=>checkvalue(2)}/>
            </div>
            <div>
                <Box value={boxvalue[3]} onboxclick={()=>checkvalue(3)}/>
                <Box value={boxvalue[4]} onboxclick={()=>checkvalue(4)}/>
                <Box value={boxvalue[5]} onboxclick={()=>checkvalue(5)}/>
            </div>
            <div>
                <Box value={boxvalue[6]} onboxclick={()=>checkvalue(6)}/>
                <Box value={boxvalue[7]} onboxclick={()=>checkvalue(7)}/>
                <Box value={boxvalue[8]} onboxclick={()=>checkvalue(8)}/>
            </div>
        </div>
         </>}
        </>
    )
}

export default Board