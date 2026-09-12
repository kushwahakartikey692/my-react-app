import { useState } from 'react';
import './App.css';
function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [incresult, setIncresult] = useState(0);

  function add() {
    setResult(num1 + num2);
  }
  function reset(){
    setNum1('')
    setNum2('')
    setResult('')
    setIncresult(0)
  }
  function product(){
    setResult(num1 * num2)
  }

  function division(){
    setResult(num1 / num2)
  }

  function factorial(){
    let result = 1
    for(let i = 1; i <= num1; i++){
        result *= i
    }
    setResult(result)
  }

  function remainder(){
     setResult(num1 % num2)
  }

  function subtract() {
    setResult(num1 - num2);
  }

  function increment(){
    
    setIncresult(incresult + 1)
  }

  function decrement(){
    setIncresult(incresult - 1)
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
          placeholder='Enter Nummber'
        />
        <br />
        <label>Number 2:</label>
        <br />
        <input 
          type="tel" 
          value={num2} 
          onChange={(e) => setNum2(Number(e.target.value))} 
          placeholder='Enter Number'
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
        <label htmlFor="">The count is</label>
        <br />
        <input 
        type="tel" 
        value={incresult}
        onChange={(e) => setIncresult(Number(e.target.value))} 
        
        />
        <br />
        <div className='button'>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <br />
        <button onClick={product}>Product</button>
        <button onClick={division}>Division</button>
        <br />
        <button onClick={remainder}>Remainder</button>
        <button onClick={factorial}>Factorial</button>
        <br />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <br />
        <button onClick={reset}>Reset</button>
      </div>
      </div>
    </>
  );
}

export default App;