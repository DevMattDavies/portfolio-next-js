import styled from "styled-components";
import Image from "next/future/image";
import profilePic from "../public/me.jpg";

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProfileImage() {
  return (
    <ImageContainer>
      <Image
        src={profilePic}
        alt="me"
        style={{
          height: "17rem",
          width: "auto",
          borderRadius: "5px",
        }}
      />
      ;
    </ImageContainer>
  );
}

export default ProfileImage;
