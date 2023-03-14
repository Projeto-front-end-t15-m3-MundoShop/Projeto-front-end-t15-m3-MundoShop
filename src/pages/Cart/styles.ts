import styled from "styled-components";

export const CartStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #efefef;
  font-family: "Inter", sans-serif;
  header {
    width: 100%;
    background-color: #4d1062;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }

      nav {
        display: flex;
        gap: 39px;
        a {
          font-size: 14px;
          color: #ffffffff;
        }
      }
    }
  }
  .carrinhoOff {
    width: 1080px;
    max-width: 80%;
    height: 500px;
    box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 42px 0;
    margin-top: 60px;
    margin-bottom: 50px;

    background-color: #fcfcfc;
    h1 {
      width: 90%;
      font-size: 20px;
      font-weight: 700;
      display: flex;
    }
    .listOff {
      margin-top: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        margin-bottom: 29px;
        font-weight: 700;
      }
      p {
        margin-bottom: 56px;
        color: #8f8f8f;
      }

      a {
        width: 304px;
        height: 70px;
        background-color: #751a8c;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
      }
    }
  }
  .carrinhoOn {
    width: 1080px;
    max-width: 80%;
    height: 682px;
    box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 42px 0;
    margin-top: 60px;
    margin-bottom: 10px;

    background-color: #fcfcfc;
    h1 {
      width: 90%;
      font-size: 20px;
      font-weight: 700;
    }

    .overflow-container {
      width: 90%;
      overflow-y: auto;
      overflow-x: none;

      .listOn {
        width: 99%;
        display: flex;
        flex-direction: column;

        gap: 30px;
        margin-top: 40px;
        li {
          width: 100%;
          height: 154px;

          position: relative;

          background-color: #f5f5f5;
          box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
          -webkit-box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
          -moz-box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);

          border-radius: 7px;

          display: flex;
          align-items: center;

          .img-container {
            width: 96px;
            height: 83px;
            object-fit: cover;
            margin-left: 20px;
            border-radius: 7px;
            img {
              max-width: 100%;
              max-width: 100%;
            }
          }

          .name-container {
            margin-left: 70px;

            h2 {
              margin-bottom: 10px;
              font-size: 18px;
              font-weight: 700;
            }
          }
          .overflow-container::-webkit-scrollbar {
            width: 12px;
          }
        }
      }

      button {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 0;
        right: 20px;
        font-size: 20px;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }

  aside {
    width: 1080px;
    height: 104px;
    max-width: 80%;
    margin-bottom: 150px;
    padding: 20px 0;

    background-color: #f5f5f5;
    box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 1px 3px 14px 2px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-bottom: 30px;
      h2 {
        font-size: 16px;
        font-weight: 700;
      }
      p {
        font-size: 14px;
      }
    }

    button {
      width: 200px;
      height: 50px;
      background-color: green;
      border: none;
      border-radius: 7px;

      font-size: 14px;
      font-weight: 700;
      color: #fcfcfc;
    }
  }
  @media (max-width: 700px) {
    header {
      height: 130px;
      div {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    main {
      h1 {
        font-size: 16px;
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .overflow-container {
        .listOn {
          li {
            .img-container {
              width: 50px;
              height: 50px;
            }
            .name-container {
              margin-left: 30px;
              h2 {
                width: 50px;
                font-size: 14px;
              }
              p {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
`;
