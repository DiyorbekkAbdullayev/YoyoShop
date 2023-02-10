import React from "react";
import styled from "styled-components";
import Card from "./Card";
const User = styled.div`
  padding: 45px 0px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const Tittle = styled.h1`
  font-family: SF Pro Display;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  overflow: hidden;
`;
const Box = styled.div``;
export default function Users() {
  return (
    <>
      <User>
        <div className="container">
          <Box>
            <Tittle>Что говорят наши клиенты</Tittle>
          </Box>
        </div>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </User>
    </>
  );
}