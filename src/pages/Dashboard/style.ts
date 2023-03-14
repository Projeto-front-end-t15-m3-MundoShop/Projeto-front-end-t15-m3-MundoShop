import styled from "styled-components"
import { Link as linkRouter } from "react-router-dom";

export const StyledHeaderDashboard = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 100px;

  background-color: #751a8c;

  nav {
    display: flex;
    gap: 1.5rem;

    p {
      color: #ffffff;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
    }

    a {
      color: #f8f9fa;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      text-decoration: none;
    }
  }
`

export const StyledDashboardMain = styled.main`
  padding: 10px 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: linear-gradient(
    to bottom,
    #751a8c 0%,
    #751a8c 50%,
    white 50%,
    white 100%
  );

  .user__header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f1f1f1;
    border-radius: 10px;

    margin-top: 60px;
    padding: 30px;

    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      cursor: pointer;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      text-align: center;
    }

    h1 {
      font-size: 3rem;
      font-weight: bold;
    }

    p {
      font-size: 1.5rem;
      color: #8f8f8f;
    }
  }

  .user__nav--container {
    padding: 40px;
    height: 300px;

    background-color: #f1f1f1;
    border-radius: 10px;

    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        text-align: center;
        cursor: pointer;

        h2{ 
          font-size: 1.5rem;
          color: #8f8f8f;
          font-weight: bold;
          font-family: inter;
        }
      }
    }
  }
`

export const Link = styled(linkRouter)`
  h2{
    font-size: 1.5rem;
    color: #8f8f8f;
    font-weight: bold;
    font-family: inter;
  }
`;

