import styled from "styled-components";

export const StylesHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #4d1062;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .nav-on {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    position: absolute;
    z-index: 0;
    gap: 22px;
    .link-align-on {
      margin-right: 80px;
    }
    a {
      font-size: 12px;
      font-weight: 300;
    }
  }

  .nav-off {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    position: absolute;
    z-index: 0;
    gap: 22px;
    .link-align {
      margin-right: 60px;
    }
    a {
      font-size: 12px;
      font-weight: 300;
    }
    p {
      color: #ffffffff;
      font-family: "Inter", sans-serif;
      font-size: 12px;
    }
  }
  .header-align {
    width: 90%;
    display: flex;
    justify-content: space-between;
    .logo {
      width: 130px;
      height: 30px;
    }
    .cart-container {
      z-index: 1;
      position: relative;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        p {
          position: absolute;
          top: 1px;
          right: 6px;
          font-size: 16px;
          color: #ffffffff;
          font-weight: 500;
          margin-right: 7px;
        }
      }
    }
  }
  @media (max-width: 456px) {
    .header-align {
      .logo {
        width: 100px;
        height: 20;
      }
    }
  }
  @media (max-width: 400px) {
    .header-align {
      .logo {
        display: none;
      }
    }
    .nav-off {
      .link-align {
        margin-right: 0;
      }
    }
  }
`;
