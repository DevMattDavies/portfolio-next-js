import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconContainer } from "./Containers.styles";

export const SplashIconLine = styled.div`
  border-left: 1px solid var(--secondary);
  flex-grow: 1;
  width: 1px;
  margin: ${(props) => props.style};
`;

const StyledIcon = styled.a`
  color: var(--secondary);
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  &:hover {
    color: var(--highlight);
    cursor: pointer;
  }
`;

function SplashIcons() {
  return (
    <IconContainer>
      <SplashIconLine style={{ margin: "0 0 5px 0" }} />
      <StyledIcon>
        <TwitterIcon
          onClick={() => {
            window.open("https://twitter.com/DevMattDavies");
          }}
          fontSize="large"
        />
      </StyledIcon>
      <StyledIcon>
        <LinkedInIcon
          onClick={() => {
            window.open("https://www.linkedin.com/in/devmattdavies/");
          }}
          fontSize="large"
        />
      </StyledIcon>
      <StyledIcon>
        <GitHubIcon
          onClick={() => {
            window.open("https://github.com/DevMattDavies");
          }}
          fontSize="large"
        />
      </StyledIcon>
      <SplashIconLine style={{ margin: "10px 0 0 0" }} />
    </IconContainer>
  );
}

export default SplashIcons;
