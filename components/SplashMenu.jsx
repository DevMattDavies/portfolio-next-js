import styled from "styled-components";
import { SplashMenuContainer } from "./Containers.styles";

const MenuItem = styled.h1`
  color: var(--secondary);
  font-family: var(--font-primary);
  font-size: 5rem;
  font-weight: 700;
  -webkit-text-stroke: 2px var(--secondary);
  -webkit-text-fill-color: transparent;
  text-align: right;

  &:hover {
    color: var(--secondary);
    -webkit-text-fill-color: var(--secondary);
    cursor: pointer;
  }
`;


function SplashMenu() {
  return (
    <SplashMenuContainer>
      <MenuItem>About.</MenuItem>
      <MenuItem>Tech Stack.</MenuItem>
      <MenuItem>Projects.</MenuItem>
      <MenuItem>Contact.</MenuItem>
      <MenuItem>CV.</MenuItem>
    </SplashMenuContainer>
  );
}

export default SplashMenu