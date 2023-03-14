import styled from 'styled-components'

export const StyledRemoveModalDiv = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.6);
    z-index: 100;

    .modal__header--container{
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        padding: 20px 30px;
        margin: 0 auto;
        background-color: #f8f8f8;
        border-radius: 4px;

        .modal__header{
            display: flex;
            justify-content: space-between;
        }
        
        h2{
            font-size: 1.5rem;
        }
        span{
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
        }
    }

    .buttons__container{
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        margin-top: 30px;

        button{
            width: 80px;
            height: 40px;
            border: none;
            font-size: 1.3rem;
            border-radius: 6px;
        }

        .button__confirm{
            background-color: #5da033;
        }
        .button__decline{
            background-color: #e3010f;
        }
    }
`