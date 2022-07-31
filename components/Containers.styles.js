import styled from "styled-components";

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 100%;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  margin-left: 10vw;
  padding: 0 3rem;

  @media screen and (min-width: 60rem) {
    width: 90vw;
    margin: 0 auto;
  }
`;

export const SplashContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-bottom: 5rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  position: relative;

  @media (min-width: 60rem) {
    min-width: 100%;
    max-width: 90rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 18vw;
  height: 100vh;
  position: fixed;
  margin-right: 10vw;
  top: 0;

  @media screen and (min-width: 450px) {
    width: 10vw;
  }
`;

export const SplashMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;

export const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
  gap: 2rem;
  margin-top: 3rem;

  @media screen and (min-width: 60rem) {
    flex-direction: row;
  }
`;

export const RightTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const PageArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 5vw;
  height: 100vh;
  position: fixed;
  margin-left: 50vw;
  top: 0;

  @media screen and (min-width: 450px) {
    margin-left: 95vw;
    /* justify-content: center; */
    /* gap: 2rem; */
  }
`;

export const SplashArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 5vw;
  height: 100vh;
  position: fixed;
  margin-left: 50vw;
  top: 0;

  @media screen and (min-width: 450px) {
    margin-left: 95vw;
  }
`;
