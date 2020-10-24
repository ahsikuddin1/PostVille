import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <strong>Edit Comment</strong>
      </h3>
      <label>
        Updated Comment:
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </label>

      <button>Update</button>
    </form>
  );
}
