import React,{useState} from 'react'
import "./style.css"

 function Framework() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className='CounterApp'>
        <div>
      <h1>React Counter</h1>
      <h1>{count}</h1>
      <div className='content'>
        <button className='increment' onClick={increment}>Increment</button>
        <button className='decrement' onClick={decrement}>Deccrement</button>
      </div>

        </div>
      
    </div>
  )
}
export default Framework

