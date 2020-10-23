import React, { useState, useEffect } from "react";
import { getAllPosts, postPost, putPost, destroyPost } from "../services/posts";
import { getComments, postComment, putComment,  } from "../services/comments.js";
import { Route, Switch, useHistory } from "react-router-dom";
import Posts from "../screens/Posts";

import PostCreate from "../screens/PostCreate";
import PostEdit from "../screens/PostEdit";

export default function MainContainer() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      setPosts(postsData);
    };
    fetchPosts();
    fetchComments();
  }, []);
  const handlePostCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push("/posts");
  };
  const handlePostEdit = async (id, postData) => {
    const newPost = await putPost(id, postData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === parseInt(id) ? newPost : post;
      })
    );
    history.push("/posts");
  };
  
  // const handlePostDelete = async (id) => {
  //   const destroy = await destroyPost(id);
  //   setPosts(prevState => prevState.filter(post => post.id !== id)
  //   )
  //   history.push("/posts");
  // }

  const fetchComments = async () => {
    const commentsData = await getComments();
    setComments(commentsData);
  };
  const handleCommentCreate = async (commentData) => {
    const newComment = await postComment(commentData);
    setComments((prevState) => [...prevState, newComment]);
    history.push("/comments");
  };
  const handleCommentEdit = async (id, commentData) => {
    const newComment = await putComment(id, commentData);
    setComments((prevState) =>
      prevState.map((comment) => {
        return comment.id === parseInt(comment) ? newComment : comment;
      })
    );
    history.push("/posts");
  };

  // const handlePostDelete = async (id) => {

  //   setPosts(prevState => prevState.filter(post => post.id !== parseInt(id))

  return (
    <Switch>
      <Route path="/posts/new">
        <PostCreate handlePostCreate={handlePostCreate} handleCommentCreate
          ={handleCommentCreate}/>
      </Route>
      <Route path="/posts/:id/edit">
        <PostEdit posts={posts} handlePostEdit={handlePostEdit} 
          comments={comments} handleCommentEdit={handleCommentEdit} />
      </Route>
      <Route path="/posts">
        <Posts posts={posts} comments={comments} />
      </Route>
    </Switch>
  );
}
