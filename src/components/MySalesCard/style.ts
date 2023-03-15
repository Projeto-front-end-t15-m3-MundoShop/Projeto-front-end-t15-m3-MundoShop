import styled from "styled-components"

export const StyledMyCardLi = styled.li`
  background-color: #eeee;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  margin-bottom: 20px;
  padding: 10px 20px;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

  transition: 0.25s;
  font-family: "Inter", sans-serif;

  :hover {
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
  }

  img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 10px;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-weight: bold;
    margin-bottom: 10px;
    color: grey;
  }

  .card__price {
    color: rgb(117, 26, 140);
  }

  button {
    background: grey;
    padding: 15px;
    color: white;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 5px 10px grey;
    transition: 0.25s;
    font-family: "Inter", sans-serif;
  }

  button:hover {
    background: rgb(203 0 185);
  }

  .remove__sale:hover {
    background: #d50000;
  }

  .container__image {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 200px;
  }
`

export const StyledMySalesCardContainerButton = styled.div`
  display: flex;
  gap: 10px;
`
