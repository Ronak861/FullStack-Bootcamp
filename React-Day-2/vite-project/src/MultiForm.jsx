import React, { useState } from 'react'

const MultiForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="section-card">
      <div className="section-title">Multi-field Form</div>
      <input className="input-field" type="text"     name="name"     placeholder="Full name"       value={formData.name}     onChange={handleChange} />
      <input className="input-field" type="email"    name="email"    placeholder="Email address"   value={formData.email}    onChange={handleChange} />
      <input className="input-field" type="password" name="password" placeholder="Password"        value={formData.password} onChange={handleChange} />
      <div className="live-preview">
        <span>{JSON.stringify(formData)}</span>
      </div>
    </div>
  )
}

export default MultiForm