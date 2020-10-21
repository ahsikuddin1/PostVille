import React from 'react';
import { Link } from 'react-router-dom';

export default function Posts(props) {
  const { posts } = props;
  return (
    <div>
      <h3>Posts</h3>
      
      {
        posts.map(post => (
          <div key={post.id}>
            <p>{post.user.username} {post.content}</p>
            <Link to={`/posts/${post.id}`}><p>{post.name}</p></Link>
            <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
            <button>Delete</button>
          </div>
        ))
      }
      <Link to='/posts/new'><button>Create</button></Link>
    </div>
  )
}
