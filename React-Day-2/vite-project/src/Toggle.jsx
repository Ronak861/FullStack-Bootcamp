import React, { useState } from "react"

const Toggle = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="section-card">
      <div className="section-title">Toggle</div>
      <div className={`toggle-status ${isOn ? 'on' : 'off'}`}>
        {isOn ? '● ON' : '○ OFF'}
      </div>
      <div className="btn-row">
        <button onClick={() => setIsOn(!isOn)}>
          {isOn ? 'Turn Off' : 'Turn On'}
        </button>
      </div>
    </div>
  )
}

export default Toggle