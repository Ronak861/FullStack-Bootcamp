import React, { useState } from "react"

const InputExample = () => {
  const [text, setText] = useState("")

  return (
    <div className="section-card">
      <div className="section-title">Live Input</div>
      <input
        className="input-field"
        type="text"
        placeholder="Type something…"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="live-preview">
        You typed: <span>{text || '—'}</span>
      </div>
    </div>
  )
}

export default InputExample