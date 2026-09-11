import { useState } from 'react';
import './App.css';
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function add() {
    setResult(num1 + num2);
  }

  function subtract() {
    setResult(num1 - num2);
  }

  return (
    <>
      <div class='box'>
        <h1>Simple Calculator</h1>
        <label>Number 1:</label>
        <br />
        <input 
          type="tel" 
          value={num1} 
          onChange={(e) => setNum1(Number(e.target.value))} 
        />
        <br />
        <label>Number 2:</label>
        <br />
        <input 
          type="tel" 
          value={num2} 
          onChange={(e) => setNum2(Number(e.target.value))} 
        />
        <br />
        <label>Result</label>
        <br />
        <input 
          type="tel" 
          placeholder="Result" 
          value={result} 
          readOnly 
        />
        <br />
        <button onClick={add}>Add</button>
        <br />
        <button onClick={subtract}>Subtract</button>
      </div>
    </>
  );
}

export default App;