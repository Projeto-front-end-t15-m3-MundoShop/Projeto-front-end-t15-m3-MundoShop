import styled from "styled-components";
import { Link as linkRouter } from "react-router-dom";
import Rectangle from "./../../assets/Rectangle.svg";

export const H2Login = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  margin-bottom: 50px;
`;

export const FormLogin = styled.form`
  width: 500px;
  max-width: 80%;
  background: #ffffff;
  border-radius: 10px;
  padding: 25px 25px;
`;

export const ButtonLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ButtonEntrar = styled.button`
  width: 100%;
  height: 61px;

  background: #751a8c;
  border-radius: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 38px;
  color: #ffffff;

  border: none;
`;

export const ButtonBack = styled.button`
  width: 100%;
  height: 61px;

  background: #a3a3a3;
  border-radius: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 38px;
  color: #ffffff;

  border: none;
`;

export const Link = styled(linkRouter)`
  color: #9f4cc7;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 38px;
  display: flex;
  justify-content: flex-end;

  margin-bottom: 20px;
`;

export const DivForm = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url(${Rectangle});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const ImgLogo = styled.img``;
