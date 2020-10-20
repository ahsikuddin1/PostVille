import React, { useState } from 'react'

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { handlePostCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handlePostCreate(formData);
    }}>
      <h3>Create Post</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
}