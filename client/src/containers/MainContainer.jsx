import React, { useState, useEffect } from "react";
import { getAllPosts, postPost, putPost, destroyPost } from "../services/posts";
import {
  destroyComment,
  getComments,
  postComment,
  putComment,
} from "../services/comments.js";
import { Route, Switch, useHistory } from "react-router-dom";
import Posts from "../screens/Posts";
import CommentCreate from "../screens/CommentCreate";
import CommentEdit from "../screens/CommentEdit";
import PostCreate from "../screens/PostCreate";
import PostEdit from "../screens/PostEdit";
import Welcome from "../screens/Welcome";

export default function MainContainer() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isCommentDeleted, setIsCommentDeleted] = useState(false);
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
  const handlePostDelete = async (id) => {
    const destroy = await destroyPost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  const fetchComments = async () => {
    const commentsData = await getComments();
    setComments(commentsData);
  };
  const handleCommentCreate = async (id, commentData) => {
    const newPost = await postComment(id, commentData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === parseInt(id) ? newPost : post;
      })
    );
    history.push("/posts");
  };
  const handleCommentEdit = async (id, commentData) => {
    const newPost = await putComment(id, commentData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === newPost.id ? newPost : post;
      })
    );
    history.push("/posts");
  };
  const handleCommentDelete = async (comment) => {
   await destroyComment(comment.id);
    setPosts((prevState) => prevState.map((post) => {
      return post.id === comment.post_id ? {
        ...post,
        comments: post.comments.filter((cnmt) => {
          return cnmt.id !== comment.id 
        })
      }: post
    }))
  };
  
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/posts/new">
        <PostCreate handlePostCreate={handlePostCreate} />
      </Route>
      <Route path="/posts/:id/comments/new">
        <CommentCreate handleCommentCreate={handleCommentCreate} />
      </Route>
      <Route path="/comments/:id/edit">
        <CommentEdit
          comments={comments}
          handleCommentEdit={handleCommentEdit}
        />
      </Route>
      <Route path="/posts/:id/edit">
        <PostEdit
          posts={posts}
          handlePostEdit={handlePostEdit}
          comments={comments}
        />
      </Route>
      <Route path="/posts">
        <Posts
          posts={posts}
          comments={comments}
          handlePostDelete={handlePostDelete}
          handleCommentCreate={handleCommentCreate}
          handleCommentDelete={handleCommentDelete}
          setIsCommentDeleted={setIsCommentDeleted} 
          isCommentDeleted={isCommentDeleted}
          fetchComments={fetchComments}
        />
      </Route>
    </Switch>
  );
}
