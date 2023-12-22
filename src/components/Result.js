import React,{useState,useEffect} from 'react'
import "./Result.css"
import QuestionBox from './QuestionBox'
import {Circle} from "rc-progress"

export default function Result() {
  // const[mode,setmode]=useState(false)
  const[showQuestion,setshowQuestion]=useState(false)
  // const[marks,setMarks]=useState(0)

  const playAgain=()=>{
    setshowQuestion(true)
  }

  // const changeMode=()=>{
  //   setmode(!mode)
  // }
  let scoreValue=window.localStorage.getItem("score")

  let percentage=(scoreValue/10)*100




 

  return (

    <div>
      {showQuestion?(<QuestionBox />):(
        <div className='result-container'>
   <h1>Result</h1>
   <div class="progress-container">
    <Circle 
    width="100px"
    percent={percentage}
    strokeColor="#4be823"
    strokeWidth={5}
    trailColor='#fff'
    trailWidth={5}
    strokeLinecap='square'
    transition="stroke-width 0.3s ease-in-out"
    />
</div>
  

   <h2>{scoreValue} out 10 Answers are correct ({percentage} %)</h2>
   <div className='play-again-btn-cont'>
   <button className='play-again-btn' onClick={playAgain}>play Again</button>
   </div>
 </div>

      )}
 
    </div>
  )
}



