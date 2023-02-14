import React from "react";
import {
  AiFillInstagram,
  AiOutlineClockCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

import styled from "styled-components";
const Footerr = styled.footer`
  border-top: 1px solid lightgrey;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
const Box = styled.div`
  padding: 32px 0px;
  display: flex;
  align-items: flex-start;
  gap: 188px;
`;
const Tittle = styled.h1`
  font-family: SF Pro Display;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;
const Item = styled.li``;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
`;
const ListIcon = styled.ul`
  display: flex;
  align-items: center;
  gap: 38px;
`;
const Icon = styled.li`
  font-size: 24px;
`;
const Paragrf = styled.p`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  width: 188px;
`;
const Item2 = styled(Item)`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Paragrf2 = styled(Paragrf)`
  width: 247px;
`;
const FooterBottom = styled.div`
  padding: 16px 30px;
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const List2 = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Itemm2 = styled.li`
  font-family: SF Pro Display;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  opacity: 0.75;
  
`;
const Design = styled.div`
  display: flex;
  align-items: center;
`;
const Text1 = styled.p`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  text-align: right;
`;
const Text2 = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
`;
export default function Footer() {
  return (
    <>
      <Footerr>
        <div className="container">
          <Box>
            <List>
              <Tittle>Информация</Tittle>
              <Item>Акции</Item>
              <Item>О магазине</Item>
              <Item>Доставка и оплата</Item>
              <Item>Наши гарантии</Item>
            </List>
            <List>
              <Tittle>Категории</Tittle>
              <Item>Одежды для женщин</Item>
              <Item>Одежды для мальчиков</Item>
              <Item>Одежды для младенцев</Item>
            </List>
            <List>
              <Tittle>Время работы</Tittle>
              <Item2>
                <AiOutlineClockCircle />
                <Paragrf>Мы работаем без выходных с 10:00 до 19:00</Paragrf>
              </Item2>
              <Socials>
                <ListIcon>
                  <Icon>
                    <FaFacebookF />
                  </Icon>
                  <Icon>
                    <AiFillInstagram />
                  </Icon>
                  <Icon>
                    <FaTwitter />
                  </Icon>
                </ListIcon>
              </Socials>
            </List>
            <List>
              <Tittle>Наши контакты</Tittle>
              <Item2>
                <HiOutlineLocationMarker />
                <Paragrf2>Учтепинский район, 14 квартал, ул. Лутфий</Paragrf2>
              </Item2>
              <Item2>
                <BsTelephone />
                <Paragrf>+998 71 200 05 99</Paragrf>
              </Item2>
              <Item2>
                <AiOutlineMail />
                hello@kidion.uz
              </Item2>
            </List>
          </Box>
        </div>
        <FooterBottom>
          <List2>
            <Itemm2>Политика безопасности</Itemm2>
            <Itemm2>Условия соглашения</Itemm2>
            <Itemm2>Публичная оферта</Itemm2>
          </List2>
          <Design>
            <Text1>Designed by:</Text1>
            <Text2>Getter</Text2>
          </Design>
        </FooterBottom>
      </Footerr>
    </>
  );
}
