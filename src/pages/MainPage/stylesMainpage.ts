import styled from "styled-components";
import banner from "../../assets/banner.svg";
import bannerMobile from "../../assets/bannerMobile.svg";

export const StylesMainPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  font-family: "Inter", sans-serif;

  .banner {
    width: 100%;
    height: 624px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: url(${banner});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    .text-container--align {
      width: 90%;
      .text-container--background {
        width: 668px;
        height: 350px;
        background-color: rgba(59, 24, 116, 0.31);
        max-width: 100%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        padding: 40px 0;
        .text-container {
          display: flex;
          flex-direction: column;
          width: 80%;
          h1 {
            margin-bottom: 20px;
          }
          h3 {
            font-size: 30px;
            font-weight: 300;
            color: #ffffff;
            margin-bottom: 56px;
          }
          h2 {
            font-size: 30px;
            font-weight: 400;
            color: #ffffff;
            margin-bottom: 55px;
            span {
              font-size: 35px;
              font-weight: 700;
              letter-spacing: 6px;
            }
          }
          a {
            width: 201px;
            height: 54px;
            border-radius: 4px;
            border: none;
            background-color: #f097ff;
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            display: flex;
            align-items: center;
            padding-left: 40px;
            position: relative;
            img {
              position: absolute;
              top: -3.5px;
              right: -25px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 970px) {
    .banner {
      background: url(${bannerMobile});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;

      .text-container--align {
        display: flex;
        justify-content: center;
        .text-container--background {
        }
      }
    }
  }
`;
