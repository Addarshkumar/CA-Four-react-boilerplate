import React,{useState,useEffect} from 'react'
import "./Result.css"
import QuestionBox from './QuestionBox'
import {Circle} from "rc-progress"

export default function Result() {
  const[mode,setmode]=useState(false)
  const[showQuestion,setshowQuestion]=useState(false)
  const[marks,setMarks]=useState(0)

  const playAgain=()=>{
    setshowQuestion(true)
  }

  const changeMode=()=>{
    setmode(!mode)
  }
  let scoreValue=window.localStorage.getItem("score")

  let percentage=(scoreValue/10)*100

  useEffect(() => {
    setTimeout(() => {
      setMarks(scoreValue);
    }, 2000);
  }, [scoreValue]);


 

  return (

    <div className='result-container'>
      {showQuestion?(<QuestionBox />):(
        <div style={{width:"800px",height:"300px",margin:"auto",marginTop:"200px",border:"1px solid black", backgroundColor:"#42eeef"
   }}>
   <h1>Result</h1>
   <div class="progress-container" style={{height:"100px",width:"100px",marginLeft:"100px"}}>
    <Circle 
    percent={percentage}
    strokeColor="blue"
    strokeWidth={4}
    trailColor='red'
    trailWidth={4}
    strokeLinecap='square'
    />
</div>
  

   <h2>{scoreValue} out 10 Answers are correct ({percentage} %)</h2>
   <button className='play-again-btn' onClick={playAgain}>play Again</button>
 </div>

      )}
 
    </div>
  )
}

