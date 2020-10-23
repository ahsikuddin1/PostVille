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
  const { posts, comments} = props;
  const { id } = useParams()
  
  const deletePost = async (id) => {
    const destroy = await destroyPost(id)
    console.log(destroy)
    window.location.reload(`/posts`)
  }

 

  return (
    <div>
      <>
        <Link to="/posts">Posts</Link>
      </>
      {posts.map((post) => (
        <ProductDetailContainer key={post.id}>
          <p>
            <strong>{post.user.username} </strong>
          </p>
          <p>{post.content}</p>
          <Comments comments={comments} />
          <Link to={`/posts/${post.id}`}>
            <p>{post.name}</p>
          </Link>
          <Link to={`/posts/${post.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => deletePost(post.id)} >Delete</button>
          <button >Comment</button>
        </ProductDetailContainer>
      ))}
      <Link to="/posts/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
