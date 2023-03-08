import styled from "styled-components";
import { Link as linkRouter } from "react-router-dom";

export const FormRegister = styled.form`
  width: 500px;
  max-width: 80%;
  background: #ffffff;
  border-radius: 10px;

  padding: 25px 25px;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;

    margin-bottom: 50px;
  }
`;

export const ButtonsRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ButtonRegister = styled.button`
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

export const Link = styled(linkRouter)`
  width: 100%;
  height: 61px;

  display: flex;
  align-items: center;
  justify-content: center;

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
