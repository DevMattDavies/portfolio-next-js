import styled from "styled-components";
import {
  SectionContainer,
  SectionContentContainer,
  RightTitleContainer,
} from "./Containers.styles";
import { SectionTitle } from "../components/SectionTitle.styles";

const ContactSectionContentContainer = styled(SectionContentContainer)`
  justify-content: flex-end;
`;

function Contact() {
  return (
    <SectionContainer>
      <RightTitleContainer>
        <SectionTitle>Get in touch</SectionTitle>
      </RightTitleContainer>
      <ContactSectionContentContainer>
        
      </ContactSectionContentContainer>
    </SectionContainer>
  );
}

export default Contact;
