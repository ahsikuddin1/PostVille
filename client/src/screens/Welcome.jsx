import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  width: 100%;
  height: inherit;
  flex: 1;
  background-image: url("https://images.unsplash.com/photo-1539035104074-dee66086b5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=2550&q=80");
  background-size: cover;
  padding: 10px 0 10px 0;
  color: white;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #a8c6fa;
  cursor: pointer;
  font-size; 20px;
  margin: 5px;
`;

const Welcome = () => (
  <Banner>
    <Content>
      <h1>Welcome to Postville!</h1>
      <h2>A mix of Twitter/Reddit for your blogging needs.</h2>
      <SubmitButton>Log In</SubmitButton>
      <SubmitButton>Sign Up</SubmitButton>
    </Content>
  </Banner>
);

export default Welcome;
