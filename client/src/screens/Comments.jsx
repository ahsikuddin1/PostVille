import React from "react";
import { Link } from "react-router-dom"


export default function Comments(props) {
  const { comments } = props;
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p> {comment.user.username}: {comment.content}</p>
            <Link to={`/comments/${comment.id}/edit`}>
              <button>Edit Comment</button>
            </Link>
            <button>Delete Comment</button>
          </div>
        );
      })}
    </div>
  );
}
