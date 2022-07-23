import styled from "styled-components";
import Image from "next/future/image";

const ContactIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
`;

function ContactIcons() {
  return <ContactIconsContainer></ContactIconsContainer>;
}

export default ContactIcons;
