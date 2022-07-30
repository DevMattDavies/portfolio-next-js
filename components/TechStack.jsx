import styled from "styled-components";
import {
  SectionContainer,
  SectionContentContainer,
  RightTitleContainer,
  InnerSectionContainer,
} from "./Containers.styles";
import { SectionTitle, TitleArea } from "../components/SectionTitle.styles";
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
    <SectionContainer id="techstack">
      <RightTitleContainer>
        <TitleArea>
          <SectionTitle>Tech Stack</SectionTitle>
        </TitleArea>
      </RightTitleContainer>
      <TechSectionContentContainer>
        <TechIcons />
        <TechText />
      </TechSectionContentContainer>
    </SectionContainer>
  );
}

export default TechStack;
