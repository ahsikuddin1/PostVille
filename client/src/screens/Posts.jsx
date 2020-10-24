// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import Comments from "../screens/Comments";
// import styled from "styled-components";

// const ProductDetailContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: flex-start;
//   background-color: grey;
//   width: auto;
//   height: px;
//   color: white;
//   box-shadow: 0px 3px 6px #00000029;

//   @media (max-width: 800px) {
//     height: 494px;
//   }

//   @media (max-width: 400px) {
//     flex-direction: column;
//     height: 520px;
//   }
// `;

// export default function Posts(props) {
//   const { posts, comments, handlePostDelete } = props;
//   const { id } = useParams();

//   return (
//     <div>
//       <>
//         <Link to="/posts">Posts</Link>
//       </>
//       {posts.map((post) => (
//         <ProductDetailContainer key={post.id}>
//           <p>
//             <strong>{post.user.username} </strong>:{post.content}
//           </p>

//           <Link to={`/posts/${post.id}`}>
//             <p>{post.name}</p>
//           </Link>
//           <Link to={`/posts/${post.id}/edit`}>
//             <button>Edit</button>
//           </Link>
//           <button onClick={() => handlePostDelete(post.id)}>Delete</button>
//           <Comments comments={post.comments} />
//           <Link to={`/posts/${post.id}/comments/new`}>
//             <button>Comment</button>
//           </Link>
//         </ProductDetailContainer>
//       ))}
//       <Link to="/posts/new">
//         <button>Create</button>
//       </Link>
//     </div>
//   );
// }

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
  const { posts } = props;
  return (
    <MainContainer>
      {/* <Link to="/posts"> */}
      <h3>Posts</h3>
      {/* </Link> */}
      <Link to="/posts/new">
        <SubmitButton>Create a Post</SubmitButton>
      </Link>
      {posts.map((post) => (
        <Post post={post} {...props} />
      ))}
    </MainContainer>
  );
}

