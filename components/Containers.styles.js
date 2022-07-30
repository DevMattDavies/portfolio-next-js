import styled from "styled-components";

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 100%;
  margin-left: 10vw;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 60rem) {
    width: 70vw;
    /* margin: 0 auto; */
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
  position: fixed;
  margin-right: 10vw;
  top: 0;
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
  width: 10vw;
  height: 100vh;
  position: fixed;
  margin-left: 50vw;
  top: 0;

  @media screen and (min-width: 60rem) {
    margin-left: 90vw;
  }
`;

export const SplashArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 10vw;
  height: 100vh;
  position: fixed;
  margin-left: 50vw;
  top: 0;

  @media screen and (min-width: 60rem) {
    margin-left: 90vw;
  }
`;
