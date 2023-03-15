import styled from "styled-components";

export const StyledMySalesUl = styled.ul`
  width: 70%;
  height: fit-content;
  margin: 0 auto;
  padding: 20px;

  background-color: #f8f8f8;
  border-radius: 0px 0px 10px 10px;

  p{
    text-align: center;
    font-size: 2rem;
  }
`

export const StyledMySalesHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  width: 70%;
  margin: 0 auto;
  padding: 20px;

  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Inter", sans-serif;

  background-color: #f8f8f8;

  border-radius: 10px 10px 0px 0px;

  img {
    background-color: #4e4e4e;
    padding: 7px 10px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.25s;
  }

  img:hover {
    background-color: rgb(112 112 112);
  }
  
  p{
  text-align: center;
  font-size: 2rem;
  }
`

export const StyledMySalesMain = styled.main`
  background-color: rgb(117, 26, 140);

  height: 450px;
`
