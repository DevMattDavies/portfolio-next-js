import styled from "styled-components";
import { SectionContainer, SectionContentContainer } from "./Containers.styles";
import { SectionTitle, TitleArea } from "../components/SectionTitle.styles";
import AboutText from "./AboutText";
import ProfileImage from "./ProfileImage";
import SubtitleLine from "./SubtitleLine";
import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

const AboutSectionContainer = styled(SectionContainer)`
  @media screen and (min-width: 60rem) {
    padding-left: 10rem;
  }
`;

function About({ props }) {
  const { ref: aboutRef, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView === true) {
      props.setCurrentSection("#about");
    }
  });

  return (
    <>
      <AboutSectionContainer id="about" ref={aboutRef}>
        <TitleArea>
          <SectionTitle>About Me</SectionTitle>
        </TitleArea>
        <SectionContentContainer>
          <AboutText />
          <ProfileImage />
        </SectionContentContainer>
      </AboutSectionContainer>
    </>
  );
}

export default About;
