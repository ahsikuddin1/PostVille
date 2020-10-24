import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;

const StyledInput = styled.input`
  font-size: 15px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
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
`;

const H3 = styled.h3`
  color: #3f8bf6;
`;

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { error, handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <MainContainer>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <h3>Login</h3>
        {error && <p>{error}</p>}
        <label>
          Username:
          <StyledInput
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="Username"
          />
        </label>
        <label>
          Password:
          <StyledInput
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </label>

        <SubmitButton>Login</SubmitButton>
        <H3>Don't have an account?</H3>
        <Link to="/register">
          <SubmitButton>Sign Up!</SubmitButton>
        </Link>
        {/* <Link to="/posts">Posts</Link> */}
      </StyledForm>
    </MainContainer>
  );
}
