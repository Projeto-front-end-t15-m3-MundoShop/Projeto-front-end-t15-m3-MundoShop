import styled from "styled-components"

export const StylesCard = styled.li`
    max-width: 260px;
    height: 350px;
    backgroud-color: #FFFFFF;
    border: none;
    border-radius: 8px;
    font-family: "Inter";
    display: flex;
    flex-direction: column;
    gap: 15px

    > h2 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    > p {
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 1.3rem;
    }
`