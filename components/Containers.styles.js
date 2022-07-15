import styled from "styled-components";
import GlobalStyle from "../GlobalStyles.styles";

export const SplashContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const SectionContainer = styled.div`
  padding-top: 20rem;

  @media (min-width: 60rem) {
    padding-right: 50px;
    max-width: 70rem;
    margin: 0 auto;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: 100vh;
  position: sticky;
`;

export const SplashMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 90vw;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 90vw;
  height: 100%;
`;
