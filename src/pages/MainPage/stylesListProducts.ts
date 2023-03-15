import styled from "styled-components";

export const StylesSectionProducts = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  > h2 {
    color: #828282;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.3rem;
    font-family: Inter;
    padding: 30px 20px 10px 20px;
  }

  > ul {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    gap: 30px 15px;
    padding: 20px;
  }

  ul > li > h1 {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.3rem;
    font-family: Inter;
    padding: 30px 20px 10px 20px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    padding-bottom: 100px;
    background-color: #ededed;
  }

  @media (min-width: 575px) {
    > ul {
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      position: relative;
    }
  }
`;
