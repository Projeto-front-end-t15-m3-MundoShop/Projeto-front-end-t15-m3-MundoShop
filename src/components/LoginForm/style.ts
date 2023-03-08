import styled from "styled-components";
import { Link as linkRouter } from "react-router-dom";

export const H2Login = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  margin-bottom: 50px;
`;

export const FormLogin = styled.form`
  max-width: 502px;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;

  margin: 0px auto;
  padding: 78px 57px;
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
`;

export const Link = styled(linkRouter)`
  color: #9f4cc7;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  display: flex;
  justify-content: flex-end;

  margin-bottom: 20px;
`;

export const DivTest = styled.div`
  background: #f4deff;
  width: 100vw;
  height: 100vh;
`;
