import React from 'react';
import { Link } from 'react-router-dom';


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
          {/* <Link to='/foods'>Foods</Link>
          <Link to='/flavors'>Flavors</Link> */}
        </>
      }
    </div>
  )
}