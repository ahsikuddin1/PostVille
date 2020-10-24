import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components"

const LabelContainer = styled.label`
  color: #707070;
  font-size: 28px;

  @media (max-width: 400px) {
    align-self: flex-start;
  }
`;

const TextArea = styled.textarea`
  border-radius: 22px;
  width: 375px;
  justify-self: flex-end;
  margin: 10px;
  padding: 10px;
  font-family: regular, Varela Round;
  font-size: 25px;
  height: 120px;

  :focus {
    outline: none;
    border: 3px solid ;
    border-radius: 22px;
  }
  
  @media (max-width: 400px) {
    width: 70vw;
  }
`;
const Button = styled.button`
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #a8c6fa;
  cursor: pointer;
  font-size; 20px;
  margin-bottom: 5px;
`;

export default function CommentEdit(props) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { handleCommentEdit, comments } = props;
 
  const { id } = useParams();

  // Edit is almost identical to create but we prefill the formData
  useEffect(() => {
    const prefillFormData = () => {
      // We already have the comment info that we need in our list of posts
      // we can use ".find" to select the single post from the list by its id
      const { content } = comments.find((comment) => comment.id === Number(id));
      // const { commentsContent } = comments.find((comment)) => comment.id === Number(id));
      setFormData({ content });
    };
    // in react, child component will finish loading before the parents
    // as a result, this component will render before the have our comments list
    // we conditionally run "prefillFormData" based on if there are comments in our list
    if (comments.length) {
      prefillFormData();
    }
    // additionally we put "posts" in our array to watch for changes
    // when "posts" updates, we will rerun our "useEffect" function
  }, [comments, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCommentEdit(id, formData);
      }}
    >
      <h3>
        <LabelContainer>Edit Comment</LabelContainer>
      </h3>
      <label>
        Updated Comment:
        <TextArea
          rows={10}
          columns={20}
          name="content"
          required
          value={formData.content}
          onChange={handleChange}
        />
      </label>

      <Button>Update</Button>
      <Link to="/posts">
        <Button>Back</Button>
        </Link>
    </form>
  );
}
