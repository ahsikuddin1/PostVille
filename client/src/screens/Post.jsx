import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../screens/Comments";
import styled from "styled-components";

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
  margin-bottom: 5px;
`;

const SVGButton = styled.button`
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: white;
  cursor: pointer;
  svg {
    width: 30px;
    fill: #267cb5;
    .st0 {
      fill: #267cb5;
    }
    .st1 {
      fill: #ffffff;
    }
  }
`;

const PostContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledCRUDOpts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 5px;
  position: absolute;
  width: 50px;
  right: -50px;
`;

const StyledPost = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  flex: 1;
  padding: 10px;
  margin: 5px;
`;

const StyledContent = styled.div`
  background-color: #c9f2fc;
  padding: 15px;
  border-radius: 5px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid black;
  border-radius: 5px;
  font-family: "Varela Round", sans-serif;
`;

const StyledCommentOptns = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Post(props) {
  console.log(props);
  const {
    post,
    handlePostDelete,
    handleCommentCreate,
    handleCommentDelete,
    setIsCommentDeleted,
    isCommentDeleted,
    fetchComments,
  } = props;
  const { id } = useParams();
  const [showCreateComment, toggleCreateComment] = useState(false);
  const [showComments, toggleComments] = useState(false);
  const [formData, setFormData] = useState({
    content: "",
  });
  useEffect(() => {
    const Comments = async () => {
      const newComments = await fetchComments();
    };
    fetchComments();
  }, [isCommentDeleted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <PostContainer>
      <StyledPost key={post.id}>
        <p>
          <strong>{post.user.username}</strong>:
          <StyledContent>{post.content}</StyledContent>
        </p>

        <Link to={`/posts/${post.id}`}>
          <p>{post.name}</p>
        </Link>

        <StyledCommentOptns>
          <SubmitButton onClick={() => toggleCreateComment(true)}>
            Post Comment
          </SubmitButton>
          <SubmitButton onClick={() => toggleComments(!showComments)}>
            View Comments
          </SubmitButton>
        </StyledCommentOptns>

        {showCreateComment && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommentCreate(post.id, formData);

              toggleCreateComment(false);
              toggleComments(true);
            }}
          >
            <StyledTextArea
              placeholder="Add a comment..."
              name="content"
              value={formData.content}
              onChange={handleChange}
            ></StyledTextArea>
            <SubmitButton>Comment</SubmitButton>
          </form>
        )}
        {showComments && (
          <Comments
            comments={post.comments}
            handleCommentDelete={handleCommentDelete}
            setIsCommentDeleted={setIsCommentDeleted}
            isCommentDeleted={isCommentDeleted}
          />
        )}
      </StyledPost>
      <StyledCRUDOpts>
        <SVGButton onClick={() => handlePostDelete(post.id)}>
          <svg version="1.1" viewBox="0 0 128 128">
            <path
              d="M94.2,40L90,108.1c-0.1,2.1-1.9,3.9-4,3.9H42c-2.1,0-3.9-1.8-4-3.9L33.8,40h-4l4.2,68.4  c0.3,4.2,3.8,7.6,8,7.6h44c4.2,0,7.7-3.4,8-7.6L98.2,40H94.2z"
              fill="#3B97D3"
            />
            <path
              d="M102,22H26c-2.2,0-4,1.8-4,4v8c0,2.2,1.8,4,4,4h76c2.2,0,4-1.8,4-4v-8C106,23.8,104.2,22,102,22z M102,34H26  v-8h76V34z"
              fill="#3B97D3"
            />
            <path
              d="M65,103.7c-0.6,0-1-0.4-1-1V45c0-0.6,0.4-1,1-1s1,0.4,1,1v57.7C66,103.2,65.6,103.7,65,103.7z"
              fill="#2C3E50"
            />
            <path
              d="M79.8,103.7C79.8,103.7,79.8,103.7,79.8,103.7c-0.6,0-1-0.5-1-1L81,45c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1  l-2.2,57.7C80.8,103.2,80.4,103.7,79.8,103.7z"
              fill="#2C3E50"
            />
            <path
              d="M49.7,103.7c-0.5,0-1-0.4-1-1L46.2,45c0-0.6,0.4-1,1-1c0.5,0,1,0.4,1,1l2.5,57.7  C50.7,103.2,50.3,103.6,49.7,103.7C49.7,103.7,49.7,103.7,49.7,103.7z"
              fill="#2C3E50"
            />
            <path
              d="M53,20v-2c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v2h4v-2c0-3.3-2.7-6-6-6H55c-3.3,0-6,2.7-6,6v2H53z"
              fill="#3B97D3"
            />
          </svg>
        </SVGButton>
        <Link to={`/posts/${post.id}/edit`}>
          <SVGButton>
            <svg version="1.1" viewBox="0 0 128 128">
              <circle className="st0" cx="64" cy="64" r="64" />
              <g>
                <path
                  className="st1"
                  d="M100.3,37.6c0.4-0.4,0.4-1,0-1.4l-8.5-8.5c-0.4-0.4-1-0.4-1.4,0l-9.9,9.9l9.9,9.9L100.3,37.6z"
                />
                <path
                  className="st1"
                  d="M50.1,76.6c-0.3,0.8,0.5,1.5,1.3,1.3l13-4.4l23.1-23.1l-9.9-9.9L54.5,63.6L50.1,76.6z"
                />
                <path
                  className="st1"
                  d="M100,64H88c-0.6,0-1,0.4-1,1v22H41V41h22c0.6,0,1-0.4,1-1V28c0-0.6-0.4-1-1-1H28c-0.6,0-1,0.4-1,1v72   c0,0.6,0.4,1,1,1h72c0.6,0,1-0.4,1-1V65C101,64.4,100.6,64,100,64z"
                />
              </g>
            </svg>
          </SVGButton>
        </Link>
      </StyledCRUDOpts>
    </PostContainer>
  );
}
