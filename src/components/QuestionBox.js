import React, { useState } from 'react';
import questions from '../questions';
import "./questionBox.css";
import Result from './Result';

export default function QuestionBox() {
  // const [mode, setmode] = useState(false);
  const [count, setcount] = useState(0);
  const [Highlight, sethighlight] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setscore] = useState(0);
  
  const { text, options} = questions[count];

  const next = (selectedOption) => {
    if (count === questions.length - 1) {
      setShowResult(true); 
    } else {
      setcount(count + 1);
    }

    if (selectedOption.isCorrect) {
      setscore(score + 1);
    }
  };
    window.localStorage.setItem("score",score)


  const ishighlight = () => {
    sethighlight(true);
  };

  const removehighlight = () => {
    sethighlight(false);
  };

  // const changeMode = () => {
  //   setmode(!mode);
  // };

  return (
    <div>
      {showResult ? (
        <Result />
      ) : (
        <div style={{
          margin: "auto",
          border: "1px solid black",
          borderRadius: "20px",
          marginTop: "100px",
          width: "1200px",
          height: "500px",
          backgroundColor:"#efba42"
        }}>
          <div>
            <h2 style={{ display: "flex", justifyContent: "center", color: Highlight ? "red" : "" }}>Question:{count + 1} out of 10</h2>
            <h2 style={{ display: "flex", justifyContent: "center", color: Highlight ? "red" : "" }}>{text}</h2>
            <div className='options' onClick={() => { next(options[0]) }}>{options[0].text}</div>
            <div className='options' onClick={() => { next(options[1]) }}>{options[1].text}</div>
            <div className='options' onClick={() => { next(options[2]) }}>{options[2].text}</div>
            <div className='options' onClick={() => { next(options[3]) }}>{options[3].text}</div>
            <button onClick={ishighlight} style={{ marginLeft: "500px", marginTop: "20px", width: "100px", height: "50px", backgroundColor: "red", fontSize: "20px", color: "white", borderRadius: "20px" }}>Highlight</button>
            <button onClick={removehighlight} style={{ width: "200px", height: "50px", backgroundColor: "red", fontSize: "20px", color: "white", borderRadius: "20px" }}>remove Highlight</button>
          </div>
        </div>
      )}
    </div>
  );
}

