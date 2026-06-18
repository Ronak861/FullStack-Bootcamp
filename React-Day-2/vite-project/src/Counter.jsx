import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="section-card">
      <div className="section-title">Counter Component</div>
      <div className="counter-display" style={{ fontSize: '3rem' }}>{count}</div>
      <div className="btn-row">
        <button onClick={() => setCount(count + 1)}>+ Add</button>
      </div>
    </div>
  )
}

export default Counter