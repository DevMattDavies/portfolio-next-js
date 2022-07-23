import Image from "next/future/image";
import styled from "styled-components";
import Line from "../assets/subtitle-line.png";

const LineContainer = styled.div`
  max-width: 100%;
  height: auto;
  padding: 0 2rem;
`;

const LineStyles = {
  width: '100%',
  height: 'auto',
};

function SubtitleLine() {
  return (
    <LineContainer>
      <Image src={Line} style={LineStyles}></Image>
    </LineContainer>
  );
}

export default SubtitleLine;
