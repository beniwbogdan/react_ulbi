import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1)
  }
  const minusOne = () => {
    setCount(count - 1)
  }
  const zeroReset = () => {
    setCount(0)
  }


  return (
    <div className="App">
      <div>{count}</div>

      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={zeroReset}>reset</button>
    </div>
  );
}

export default App;
