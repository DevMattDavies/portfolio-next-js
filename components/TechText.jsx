import styled from "styled-components";
import { SectionText } from "../components/SectionText.styles";
import { techTextContent } from "../data/text-content/text-content";

const TechTextContent = styled.p`
  color: var(--highlight);
  font-size: var(--font-text-size);
`;

function TechText() {
  return (
    <SectionText>
      <TechTextContent>{techTextContent}</TechTextContent>
    </SectionText>
  );
}

export default TechText;
