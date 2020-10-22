import React, { useState } from 'react'
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-columns: 250px 430px;
  align-items: center;
  justify-items: flex-end;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
  }
`;
const LabelTextArea = styled.label`
  color: #707070;
  font-size: 28px;
  align-self: flex-start;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  border-radius: 22px;
  width: 375px;
  justify-self: flex-end;
  margin: 10px;
  padding: 10px;
  font-family: regular, Helvetica;
  font-size: 25px;
  color: #707070;

  :focus {
    outline: none;
    border: 3px solid #2eaf56;
    border-radius: 22px;
  }
  @media (max-width: 400px) {
    width: 70vw;
  }
`;

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    content: ''
  })
  const { handlePostCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      handlePostCreate(formData);
    }}>
      <h3>Create Post</h3>
      <label>
        Post:
        <input
          type="text"
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </Form>
  )
}