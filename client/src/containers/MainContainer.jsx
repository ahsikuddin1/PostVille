import React, { useState, useEffect } from 'react'
import { getAllPosts, postPost, putPost } from '../services/posts';
import { Route, Switch, useHistory } from 'react-router-dom';
import Posts from '../screens/Posts';
import PostCreate from '../screens/PostCreate';

export default function MainContainer() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      setPosts(postsData);
    }
    fetchPosts();
  }, [])
  const handlePostCreate = async (PostData) => {
    const newPost = await postPost(PostData);
    setPosts(prevState => ([...prevState, newPost]));
    history.push('/posts')
  }
  return (
    <Switch>
      <Route path='/posts/new'>
        <PostCreate
          handlePostCreate={handlePostCreate}
        />
      </Route>
      <Route path='/posts'>
        {console.log(posts)}
        <Posts
          posts={posts}
        />
      </Route>
    </Switch>
  )
}
