import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <h1>Postville</h1>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <>
          <Link to='/login'>Login  </Link>
          
            <Link to='/register'>Sign Up </Link>
            </>
      }
      <hr />
      {
        currentUser &&
        <>
          <Link to='/posts'>Posts</Link>
        </>
      }
    </div>
  )
}