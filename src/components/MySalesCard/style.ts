import styled from "styled-components"

export const StyledMyCardLi = styled.li`
    background-color: #EEEE;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;
    margin-bottom: 20px;
    padding: 10px 20px;

    img{
        max-width: 100px;
        max-height: 100px;
    }

    h2{
        text-align: center;
        font-weight: bold;
        margin-bottom: 10px;
    }

    p{
        text-align: center;
        font-weight: bold;
        margin-bottom: 10px;
    }
`