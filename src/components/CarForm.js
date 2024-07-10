import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: black;
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
`;

const SubmitButton = styled.button`
  background-color: #00ffb9;
  color: #1b1b1b;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  margin-top: 2rem;

  &:hover {
    background-color: #00e6a5;
  }
`;

const CarForm = () => {
  return (
    <FormContainer>
      <Title>Form Page</Title>
      <Form> 
        <Input type="text" placeholder="Input 1" />
        <Input type="text" placeholder="Input 2" />
        <Input type="text" placeholder="Input 3" />
        <Input type="text" placeholder="Input 4" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default CarForm;