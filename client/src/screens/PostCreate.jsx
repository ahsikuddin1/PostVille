import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flext start;
`;

const DetailContainer = styled.div`
  display: flex;
  margin: 50px auto;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 250px 430px;
  align-items: center;
  justify-items: flex-end;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
  }
`;
const LabelContainer = styled.label`
  color: #707070;
  font-size: 28px;

  @media (max-width: 400px) {
    align-self: flex-start;
  }
`;

const TextArea = styled.textarea`
  border-radius: 22px;
  width: 375px;
  justify-self: flex-end;
  margin: 10px;
  padding: 10px;
  font-family: regular, Varela Round;
  font-size: 25px;
  height: 120px;

  :focus {
    outline: none;
    border: 3px solid;
    border-radius: 22px;
  }

  @media (max-width: 400px) {
    width: 70vw;
  }
`;
const Button = styled.button`
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #a8c6fa;
  cursor: pointer;
  font-size; 20px;
  margin-bottom: 5px;
`;
export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { handlePostCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <MainContainer>
      <DetailContainer>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handlePostCreate(formData);
          }}
        >
          <LabelContainer>Create Post :</LabelContainer>
          <label>
            <TextArea
              rows={10}
              columns={20}
              name="content"
              value={formData.content}
              required
              onChange={handleChange}
            />
          </label>
          <Button>Create</Button>
          <Link to="/posts">
            <Button>Back</Button>
          </Link>
        </Form>
      </DetailContainer>
    </MainContainer>
  );
}
