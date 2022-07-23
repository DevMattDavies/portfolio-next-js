import styled from "styled-components";
import { SectionText } from "../components/SectionText.styles";
import { aboutTextContent } from "../data/text-content/text-content";

const AboutTextContent = styled.p`
  color: var(--highlight);
  font-size: var(--font-text-size);
`;

function AboutText() {
  return (
    <SectionText>
      <AboutTextContent>{aboutTextContent}</AboutTextContent>
    </SectionText>
  );
}

export default AboutText;
