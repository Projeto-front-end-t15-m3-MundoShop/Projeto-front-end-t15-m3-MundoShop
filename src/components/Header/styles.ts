import styled from "styled-components";

export const StylesHeader = styled.header`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 15px;
  background-color: #4d1062;
  width: 100%;

  > nav {
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
    gap: 10px;
    font-family: Inter;
  margin: 0 auto;

  }

  > nav > img {
    width: 200px;
  }

  > nav > div {
    display: flex;
    justify-content: space-between;
  }

  nav > p {
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 1.3rem;
    color: #f097ff;
  }
  nav > div > h3 {
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.3rem;
    color: #efefef;
  }
  nav > div > h2 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;
    color: #ffffff;
  }

  > nav > form {
    height: 42px;
    display: flex;
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
  }

  > nav > form > input {
    padding-left: 15px;
    border-radius: 8px 0px 0px 8px;
    border: none;
    width: 90%;
  }
  > nav > form > button {
    border-radius: 0px 8px 8px 0px;
    border: none;
    width: 20%;
    background-color: #3d1b45;
  }

  @media (min-width: 770px) {
    > nav {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 3%;
    }
    > nav > div {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
  }
`;
