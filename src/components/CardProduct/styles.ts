import styled from "styled-components";

export const StylesCard = styled.li`
  width: 100%;
  max-width: 260px;
  height: 350px;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  padding: 15px 10px;

  > button {
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  > button > img {
    max-width:100%;
    margin: 0 auto;
  }

  > button > h2 {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  > button > p {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1.3rem;
    font-family: "Inter";
    color: #333333;
  }
`;
