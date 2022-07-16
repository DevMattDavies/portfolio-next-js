import styled from "styled-components";
import { SectionContainer, SectionContentContainer } from "./Containers.styles";
import { SectionTitle } from "../components/SectionTitle.styles";
import AboutText from "./AboutText";
import ProfileImage from "./ProfileImage";



function About() {
  return (
    <SectionContainer>
      <SectionTitle>About Me</SectionTitle>
      <SectionContentContainer>
        <AboutText />
        <ProfileImage />
      </SectionContentContainer>
    </SectionContainer>
  );
}

export default About;
