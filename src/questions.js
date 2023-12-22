 const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "user interface framework", isCorrect: true },
      { id: 2, text: "both a and b", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect:true },
      { id: 1, text: "Java", isCorrect:false},
      { id: 2, text: "C", isCorrect:false },
      { id: 3, text: "C++", isCorrect:false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect:false },
      { id: 1, text: "Internal storage of the component.", isCorrect:true},
      { id: 2, text: "External storage of the component.", isCorrect:false },
      { id: 3, text: "None of the above.", isCorrect:false },
    ],
  },
  
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: " Pair of current state and function updating it", isCorrect:false},
      { id: 1, text: "Current State", isCorrect:false},
      { id: 2, text: "Function updating the current state", isCorrect:false },
      { id: 3, text: "UseState returns nothing", isCorrect:true},
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { id: 0, text: "1", isCorrect:true },
      { id: 1, text: "2", isCorrect:false},
      { id: 2, text: "3", isCorrect:false},
      { id: 3, text: "4", isCorrect:false},
    ],
  },
  {
    text: "Javascript is an _______ language?",
    options: [
      { id: 0, text: "Object oriented", isCorrect:true },
      { id: 1, text: "Object based", isCorrect:false},
      { id: 2, text: "Procedural", isCorrect:false },
      { id: 3, text: "None of the above", isCorrect:false },
    ],
  },

  {
    text: "Which of the following keywords is used to define a variable in Javascript?",
    options: [
      { id: 0, text: "var", isCorrect:false },
      { id: 1, text: "let", isCorrect:false},
      { id: 2, text: "both A and B", isCorrect:true },
      { id: 3, text: "None of the above", isCorrect:false },
    ],
  },

  {
    text: "Which of the following methods is used to access HTML elements using Javascript?",
    options: [
      { id: 0, text: "getElementbyId", isCorrect:false },
      { id: 1, text: "getElementByClassName", isCorrect:false},
      { id: 2, text: "both A and B", isCorrect:true },
      { id: 3, text: "None of the above", isCorrect:false },
    ],
  },

  {
    text: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    options: [
      { id: 0, text: "Throws an error", isCorrect:true },
      { id: 1, text: "Ignores the statement", isCorrect:false},
      { id: 2, text: "Gives a warning", isCorrect:false },
      { id: 3, text: "None of the above", isCorrect:false },
    ],
  },

  {
    text: "Which of the following methods can be used to display data in some form using Javascript?",
    options: [
      { id: 0, text: "document.write()", isCorrect:true },
      { id: 1, text: "console.log()", isCorrect:false},
      { id: 2, text: "window.alert()", isCorrect:false },
      { id: 3, text: "All of the above", isCorrect:false },
    ],
  },
];

export default questions;