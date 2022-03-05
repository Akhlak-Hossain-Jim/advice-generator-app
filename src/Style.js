import styled from "styled-components";

export const Style = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 810px;
  background-color: #202632;
  padding: 121px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    position: relative;
    width: min(540px, 100%);
    padding: 50px 49px 70px;
    background: #313a49;
    border-radius: 18px;
    display: flex;
    align-items: center;
    gap: 32px;
    flex-direction: column;
    box-shadow: 5px 5px 56px #364050;
    @media (max-width: 548px) {
      padding: 40px 27px 70px;
    }
    h1 {
      font-size: 14px;
      line-height: 100%;
      text-align: center;
      letter-spacing: 0.28em;
      color: #53ffab;
      @media (max-width: 548px) {
        font-size: 12px;
        line-height: 100%;
        letter-spacing: 0.25em;
      }
    }
    q {
      font-size: 30px;
      line-height: 125%;
      text-align: center;
      letter-spacing: -0.01em;
      color: #c5d9e0;
      @media (max-width: 548px) {
        font-size: 24px;
        line-height: 137%;
        letter-spacing: -0.01em;
      }
    }
    img {
      width: 100%;
      height: auto;
    }
    button {
      width: 64px;
      height: 64px;
      background: #53ffab;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      margin-bottom: -102px;
      &:hover {
        box-shadow: 0px 0px 26px #5bffbc;
      }
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
