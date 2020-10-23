import React from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../screens/Comments";
import { destroyPost } from "../services/posts";
import styled from "styled-components";

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: grey;
  width: auto;
  height: px;
  color: white;
  box-shadow: 0px 3px 6px #00000029;

  @media (max-width: 800px) {
    height: 494px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    height: 520px;
  }
`;

export default function Posts(props) {
  const { posts, comments, handlePostDelete } = props;
  const { id } = useParams()
  
  

 

  return (
    <div>
      <>
        <Link to="/posts">Posts</Link>
      </>
      {posts.map((post) => (
        <ProductDetailContainer key={post.id}>
          <p>
            <strong>{post.user.username} </strong>:
          {post.content}</p>
          
          <Link to={`/posts/${post.id}`}>
            <p>{post.name}</p>
          </Link>
          <Link to={`/posts/${post.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={()=>handlePostDelete(post.id)}>Delete</button>
          <Comments comments={post.comments} />
          <Link to={`/posts/${post.id}/comments/new`} >
          <button>Comment</button>
          </Link>
        </ProductDetailContainer>
      ))}
      <Link to="/posts/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
