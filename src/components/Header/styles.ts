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
    max-width: 1300px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    font-family: Inter;
    margin: 0 auto;
  }

  > nav > img {
    width: 200px;
  }

  > nav > span {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    position: absolute;
    right: 10px;
    img {
      max-width: 35px;
      background-color: transparent;
      margin-right: 200px;
    }
  }

  > nav > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  nav > a > p {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1.3rem;
    color: #f097ff;
  }

  nav > div > a {
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.3rem;
    color: #efefef;
  }

  > nav > div > button {
    border: none;
    background-color: transparent;
    font-weight: 600;
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

  > nav > button {
    border-radius: 0px 8px 8px 0px;
    border: none;
    background-color: transparent;
  }

  @media (min-width: 770px) {
    > nav {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      button {
        padding-right: 50px;
      }

      div {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 20%;
    }
    
    form > input {
    max-width: 70%;
  }
  }
}
`
