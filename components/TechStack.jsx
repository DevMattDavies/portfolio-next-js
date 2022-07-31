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

import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

const TechSectionContentContainer = styled(SectionContentContainer)`
  flex-direction: column-reverse;

  @media screen and (min-width: 60rem) {
    flex-direction: row;
  }
`;

function TechStack({ props }) {
  const { ref: techRef, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView === true) {
      props.setCurrentSection("#techstack");
    }
  });

  return (
    <SectionContainer id="techstack" ref={techRef}>
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
