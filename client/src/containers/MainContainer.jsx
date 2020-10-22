import React, { useState, useEffect } from "react";
import { getAllPosts, postPost, putPost } from "../services/posts";
import { Route, Switch, useHistory } from "react-router-dom";
import Posts from "../screens/Posts";
import PostCreate from "../screens/PostCreate";
import PostEdit from "../screens/PostEdit";

export default function MainContainer() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);
  const handlePostCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push("/posts");
  };
  const handlePostEdit = async (id,postData) => {
    const newPost = await putPost(id,postData);
    setPosts((prevState) => (prevState.map(post => {
      return post.id === parseInt(id) ? newPost : post
    })))
    history.push("/posts");
  };
  // const handlePostDelete = async (id) => {
  //   setPosts(prevState => prevState.filter(post => post.id !== parseInt(id))

  return (
    <Switch>
      <Route path="/posts/new">
        <PostCreate handlePostCreate={handlePostCreate} />
      </Route>
      <Route path="/posts/:id/edit">
        <PostEdit posts={posts} handlePostEdit={handlePostEdit}/>
      </Route>
      <Route path="/posts">
        <Posts posts={posts} />
      </Route>
    </Switch>
  );
}
