import React, { useState } from "react"

const ShowHide = () => {
  const [show, setShow] = useState(true)

  return (
    <div className="section-card">
      <div className="section-title">Show / Hide</div>
      <div className="btn-row">
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide Text' : 'Show Text'}
        </button>
      </div>
      {show && (
        <div className="reveal-text">
          👋 This text is visible! Click the button to hide it.
        </div>
      )}
    </div>
  )
}

export default ShowHide