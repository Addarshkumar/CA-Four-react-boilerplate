import React, { useContext } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import { AppContext } from "./components/Context";

function App() {
  const { isDark, setisDark } = useContext(AppContext);

  const toggleDarkMode = () => {
    setisDark(!isDark);
  };

  return (
    <div style={{ backgroundColor: isDark ? "black" : "white",height:"100vh" }}>
      <button
        style={{ backgroundColor:isDark?"white":"black",color:isDark?"black":"white",fontSize:"18px",width: "150px", height: "50px",marginLeft:"900px",borderRadius:"20px",position:"relative",top:"30px",left:"100px" }}
        onClick={toggleDarkMode}
      >
        {isDark?"Light Mode" :"Dark Mode"}
      </button>
     {/* <QuestionBox /> */}
     <Result />
    </div>
  );
}

export default App;
