import React, { useContext, useState } from 'react'
import "./homepage.css"
import ig from './../assets/bg-img.png'
import QuestionBox from './QuestionBox'
import { AppContext } from './Context'

const Homepage = () => {
    //changing the state of question box for conditional rendering
    const[question,setQuestion]=useState(false)
    const showQuestion=()=>{
        setQuestion(true)
    }
    const{isDark,setisDark}=useContext(AppContext)
  return (
    //conditional rendring to show questionbox
    <>
    {question?(<QuestionBox />):(

    <div>
        <div className='navbar'>
          <h2 className='logo'>Quiz master</h2>
          <p>Rewards</p>
          <p>Resources</p>
          <p>Faq's</p>
          <p>Blog</p>
        </div>
        <div className='image'>
            <div>
             <h1>Unlock Exclusive <br/> Rewards as you win</h1> <br/>
             <p>Dive into the ultimate quiz experience -a blend of excitment, <br/> learning, and triumph , quizzes it's more than a game</p>
             <button onClick={showQuestion} className='start-btn'>
                Start quiz
            </button>
            </div>
            <div>
          <img className='img' src={ig}/>
           
            </div>
        </div>
      
    </div>
    )}
    </>
  )
}

export default Homepage