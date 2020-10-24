import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 0 0 0 10px;
  padding: 0;
`

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #707070;
  color: black;
  font-size: 22px;
  min-height: 80px;

  a,
  a:visited,
  a:hover {
    text-decoration: none;
    color: inherit;
  }
`;
const NavOptionContainers = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 800px) {
    margin: 0px 5px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
const NavOptions = styled.p`
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #A8C6FA;
  margin: 10px;
  cursor: pointer;

  a:hover {
    text-decoration: underline;
  }
`;
export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <NavBar>
      <Link to="/">
        <H1>Postville</H1>
      </Link>
      <NavOptionContainers>
        <Link to="/login"><NavOptions>Log in</NavOptions></Link>
        <Link to="/register"><NavOptions>Sign Up</NavOptions></Link>
        <Link to="/posts"><NavOptions>Posts</NavOptions></Link>
      </NavOptionContainers>
    </NavBar>
  );
}