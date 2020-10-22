import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    content: ''
  })
  const { handlePostEdit, posts } = props;
  const { id } = useParams();

  // Edit is almost identical to create but we prefill the formData
  useEffect(() => {
    const prefillFormData = () => {
      // We already have the post info that we need in our list of posts
      // we can use ".find" to select the single post from the list by its id
      const { content } = posts.find(post => post.id === Number(id));
      setFormData({ content });
    }
    // in react, child component will finish loading before the parents
    // as a result, this component will render before the have our posts list
    // we conditionally run "prefillFormData" based on if there are posts in our list
    if (posts.length) {
      prefillFormData()
    }
    // additionally we put "posts" in our array to watch for changes
    // when "posts" updates, we will rerun our "useEffect" function
  }, [posts, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handlePostEdit(id, formData);
    }}>
      <h3><strong>Edit Post</strong></h3>
      <label>
        New Post:
        <input
          type="text"
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button>Update</button>
    </form>
  )
}
