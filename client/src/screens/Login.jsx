import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
`;



export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { error, handleLogin } = props;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <MainContainer>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      {
        error &&
        <p>{error}</p>
      }
      <label>
        Username:
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </label>
      
      <button>Login</button>
      <h3>Don't have an account?</h3>
      <Link to='/register'>Sign Up!</Link>
    </form>
    </MainContainer>
  )
}