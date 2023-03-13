import styled from "styled-components"

export const StyledForm = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 1000;

  form {
    width: 90%;
    margin: 0 auto;

    button {
      width: 100%;
      height: 61px;
      margin-bottom: 50px;

      background: #751a8c;
      border-radius: 10px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 38px;
      color: #ffffff;
    }
  }

  .modal__container {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 500px;
    margin: 0 auto;
    background-color: #f8f8f8;
    border-radius: 4px;
  }

  .modal__header {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 40px;
    padding: 20px 30px;
    gap: 105px;

    h2 {
      font-size: 1.5rem;
    }
    span {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }

    .back_button {
      border-radius: 40px;
      border: none;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      background-color: transparent;
    }
  }
`
