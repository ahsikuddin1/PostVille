import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  // background: blue;
  border: 1px solid #707070;
  color: black;
  font-size: 22px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
const NavOptionContainers = styled.div`
  display: flex;
  align-items: center;
  // flex-grow: 1;

  @media (max-width: 800px) {
    margin: 0px 5px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
const NavOptions = styled.p`
  font-size: 24px;
  margin: 0px px;
  text-decoration: none;
  color: black;
  font-weight: 600;

  @media (max-width: 1260px) {
    margin: 0px 20px;
  }

  @media (max-width: 800px) {
    margin: 0px 10px;
  }

  @media (max-width: 480px) {
    margin: 10px;
  }
`;
export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <NavBar>
      <h1>Postville</h1>
      {
        <>
          <Link to="/login">Login </Link>

          <Link to="/register">Sign Up </Link>
          <Link to="/posts">Posts</Link>
        </>
      }

      <hr />
    </NavBar>
  );
}
