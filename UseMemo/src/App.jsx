import { useState } from 'react'

import sum from './assets/sum.js'
import './App.css'

function App() {
  const {count, setCount} = useState(0)
  const total = useMemo(() => {
    console.log('Calculating total sum...');
    let total = 0;
    for (let i = 0; i < 1000; i++) {
      total += i;
    }
    return total;
  })

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Total Sum: {total}</h2>
    </>
  )
}

export default App
