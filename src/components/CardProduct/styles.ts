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
  > h2 {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.5rem;
  }

  > p {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.3rem;
  }
`;
