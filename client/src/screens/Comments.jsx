import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
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

export default function Comments(props) {
  const {
    comments,
    handleCommentDelete,
    setIsCommentDeleted,
    isCommentDeleted,
  } = props;
  const history = useHistory();
  console.log(props);

  

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              {" "}
              {comment.user.username}: {comment.content}
            </p>
            <Link to={`/comments/${comment.id}/edit`}>
              <Button>Edit Comment</Button>
            </Link>
            <Button onClick={() => handleCommentDelete(comment)}>
              Delete Comment
            </Button>
          </div>
        );
      })}
    </div>
  );
}
