import React, { useState } from "react";
import { useParams } from "react-router-dom";
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

export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    content: "",
  });

  const { id } = useParams();
  const { handleCommentCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleCommentCreate(id, formData);
      }}
    >
      <h3>Create Comment</h3>
      <label>
        Comment:
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </Form>
  );
}
