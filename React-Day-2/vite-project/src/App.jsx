import React, { useState } from 'react'
import './App.css'
import Home from './Home'
import Toggle from './Toggle'
import InputExample from './InputExample'
import ShowHide from './ShowHide'
import MultiForm from './MultiForm'
import Counter from './Counter'

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(prev => prev + 1)
  const handleDecrement = () => setCount(prev => prev - 1)
  const handleReset = () => setCount(0)

  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <h1>React Day 2</h1>
        <p>useState · Events · Forms · Controlled Inputs</p>
      </div>

      {/* App-level counter */}
      <div className="section-card">
        <div className="section-title">App Counter</div>
        <div className="counter-display">{count}</div>
        <div className="btn-row">
          <button onClick={handleIncrement}>+ Increment</button>
          <button onClick={handleDecrement}>− Decrement</button>
          <button className="btn-danger" onClick={handleReset}>↺ Reset</button>
        </div>
      </div>

      <Home />
      <Counter />
      <Toggle />
      <InputExample />
      <ShowHide />
      <MultiForm />
    </div>
  )
}

export default App