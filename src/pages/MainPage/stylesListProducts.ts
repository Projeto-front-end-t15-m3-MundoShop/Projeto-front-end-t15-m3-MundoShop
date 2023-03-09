import styled from "styled-components";

export const StylesSectionProducts = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  > ul {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    gap: 15px;
    padding: 20px;
    align-items: center;
  }

  @media (min-width: 575px) {
    > ul {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`;
