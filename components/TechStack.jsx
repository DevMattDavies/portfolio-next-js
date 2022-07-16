import styled from "styled-components";
import {
  SectionContainer,
  SectionContentContainer,
  RightTitleContainer,
} from "./Containers.styles";
import { SectionTitle } from "../components/SectionTitle.styles";
import TechIcons from "./TechIcons";
import TechText from "./TechText";

function TechStack() {
  return (
    <SectionContainer>
      <RightTitleContainer>
        <SectionTitle>Tech Stack</SectionTitle>
      </RightTitleContainer>
      <SectionContentContainer>
        <TechIcons/>
        <TechText />
      </SectionContentContainer>
    </SectionContainer>
  );
}

export default TechStack;
