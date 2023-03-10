import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import styled from "styled-components";
import { Product2, Product3 } from "../../assets/img/img";
const Card = styled.div`
  padding: 50px 19px 26px 26px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const ClothesNum = styled.p`
  font-family: SF Pro Display;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  opacity: 0.75;
`;
const Tittle = styled.h1`
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  width: 127px;
  margin-bottom: 10px;
`;
const Cost = styled.p`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #72a900;
  margin-bottom: 58px;
`;
const Linnk = styled.p`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;

`;
export default function Card3({ img }) {
  return (
    <>
      <Card>
        <Texts>
          <ClothesNum>364 одежд</ClothesNum>
          <Tittle>Одежды для мальчиков</Tittle>
          <Cost>от 60 000 uzs</Cost>
          <Linnk>
            <FiChevronsRight />
            Подробнее
          </Linnk>
        </Texts>
        <img src={img} alt="" />
      </Card>
    </>
  );
}
