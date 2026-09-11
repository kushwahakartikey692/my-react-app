import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);
  const increment = () =>{
    setCount(count + 1);
  };
  
return(
  <>
<div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>The count is</p>
        <h1>{count}</h1>
        <button onClick={increment}>Add 1</button>
      </div>
    </>
);
}

export default App;