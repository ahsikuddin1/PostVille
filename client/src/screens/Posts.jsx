import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

const SubmitButton = styled.button`
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #a8c6fa;
  cursor: pointer;
  font-size; 20px;
  margin: 5px;
`;

export default function Posts(props) {
  const { posts, handleLogout, handleCommentDelete, setIsCommentDeleted, isCommentDeleted, fetchComments } = props;
  return (
    <MainContainer>
      <h3>Posts</h3>
      <Link to="/posts/new">
        <SubmitButton>Create a Post</SubmitButton>
      </Link>
      <Link to ="/">
        <SubmitButton onClick={handleLogout}>Logout</SubmitButton>
        </Link>
      {posts.map((post) => (
        <Post post={post} {...props} handleCommentDelete={handleCommentDelete} setIsCommentDeleted={setIsCommentDeleted} isCommentDeleted={isCommentDeleted} fetchComments={fetchComments}/>
      ))}
    </MainContainer>
  );
}
