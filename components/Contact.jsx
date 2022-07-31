import styled from "styled-components";
import {
  SectionContainer,
  SectionContentContainer,
  RightTitleContainer,
} from "./Containers.styles";
import { SectionTitle } from "../components/SectionTitle.styles";
import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

const ContactSectionContentContainer = styled(SectionContentContainer)`
  justify-content: flex-end;
`;

function Contact({ props }) {
  const { ref: contactRef, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView === true) {
      props.setCurrentSection("#contact");
    }
  });

  return (
    <SectionContainer id="contact" ref={contactRef}>
      <RightTitleContainer>
        <SectionTitle>Get in touch</SectionTitle>
      </RightTitleContainer>
      <ContactSectionContentContainer></ContactSectionContentContainer>
    </SectionContainer>
  );
}

export default Contact;
