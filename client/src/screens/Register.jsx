import React, { useState } from "react";
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
  height: 50%;
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

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { error, handleRegister } = props;

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
          handleRegister(formData);
        }}
      >
        <h3>Sign Up</h3>
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
          Email:
          <StyledInput
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
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
        <SubmitButton>Sign Up</SubmitButton>
      </StyledForm>
    </MainContainer>
  );
}
