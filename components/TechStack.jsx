import styled from "styled-components";
import {
  SectionContainer,
  SectionContentContainer,
  RightTitleContainer,
} from "./Containers.styles";
import { SectionTitle } from "../components/SectionTitle.styles";
import TechIcons from "./TechIcons";
import TechText from "./TechText";

const TechSectionContentContainer = styled(SectionContentContainer)`
  flex-direction: column-reverse;

  @media screen and (min-width: 60rem) {
    flex-direction: row;
  }
`;

function TechStack() {
  return (
    <SectionContainer>
      <RightTitleContainer>
        <SectionTitle>Tech Stack</SectionTitle>
      </RightTitleContainer>
      <TechSectionContentContainer>
        <TechIcons />
        <TechText />
      </TechSectionContentContainer>
    </SectionContainer>
  );
}

export default TechStack;
