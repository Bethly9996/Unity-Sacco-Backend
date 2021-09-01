import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { startCreatingTransaction } from "../../actions/transactions";
import { fetchConToken } from "../../helpers/fetchHelper";
import { useForm } from "../../hooks/useForm";
import { Navbar } from "../navbar/Navbar";

export const TransactionsScreen = () => {
  
  // const { id } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  const [ transactionValues, handleInputChange ] = useForm({
    amount: '',
    userId: ''
  });

  let { amount, userId } = transactionValues;
  
  
  const formIsValid = () => {
    
  }



  const transactionSubmit = async(e) => {
    e.preventDefault();
    
    // amount = Number(amount);
    // transactionAction(500);

    dispatch(startCreatingTransaction(500, userId))

  }

  return (
    <div>
      <Navbar />

      <Container>
        <SideContainer>
          <SubTitle alignment="center">Your Transactions</SubTitle>

          <CenterInput>
            <CustomInput />
          </CenterInput>
        </SideContainer>

        <SideContainer>
          <SubTitle>Make a transaction</SubTitle>

          <Paragraph>Your ID: </Paragraph>

          <FormTag onSubmit={ transactionSubmit }>
            <CustomInput 
              placeholder='Amount' 
              name='amount'
              value={ amount }
              onChange={ handleInputChange }
            />
            <CustomInput 
              placeholder='Put the user ID' 
              name='userId'
              value={ userId }
              onChange={ handleInputChange }
            />

            <SubmitInputContainer>
              <SubmitInput type="submit" />
            </SubmitInputContainer>

          </FormTag>
        </SideContainer>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

const SideContainer = styled.div`
  width: 50%;
`;

const SubTitle = styled.h2`
  margin-top: 70px;
  margin-bottom: 40px;
  font-weight: normal;
  font-size: 26px;
  text-align: ${(props) => props.alignment || "left"};
`;

const Paragraph = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
`;

const CenterInput = styled.div`
  display: flex;
  justify-content: center;
`;

const FormTag = styled.form``;

const CustomInput = styled.input`
  width: 60%;
  padding: 20px;
  border: none;
  background-color: #f0f0f0;
  font-size: 16px;
  color: #444;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
`;

const SubmitInputContainer = styled.div`
		width: 64%;
		display: flex;
		justify-content: center;
`;

const SubmitInput = styled.input`
  padding: 18px 60px;
  font-size: 20px;
  border: none;
  background-color: #2980b9;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: #3188c1;
    cursor: pointer;
  }
`;
