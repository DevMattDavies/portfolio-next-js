
import styled from "styled-components";

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 100%;
  margin-left: 10vw;
`;

export const SplashContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 10rem 0;
  margin: 0 auto;

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

// example setup for each page

function Example() {
  return (
    <OuterDiv>
      <InnerDivLeft>{/* Custom components here */}</InnerDivLeft>
      <InnerDivRight>{/* Custom copmonents here */}</InnerDivRight>
    </OuterDiv>
  );
}
