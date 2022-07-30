import styled from "styled-components";
import { SectionContainer, SectionContentContainer } from "./Containers.styles";
import { SectionTitle, TitleArea } from "../components/SectionTitle.styles";
import AboutText from "./AboutText";
import ProfileImage from "./ProfileImage";
import SubtitleLine from "./SubtitleLine";

function About() {
  return (
    <>
      <SectionContainer id="about">
        <TitleArea>
          <SectionTitle>About Me</SectionTitle>
        </TitleArea>
        <SectionContentContainer>
          <AboutText />
          <ProfileImage />
        </SectionContentContainer>
      </SectionContainer>
    </>
  );
}

export default About;
