import Link from "next/link";
import styled from "styled-components";
import { SplashMenuContainer } from "./Containers.styles";

const MenuItem = styled.a`
  color: var(--secondary);
  font-family: var(--font-primary);
  font-size: 5rem;
  font-weight: 700;
  -webkit-text-stroke: 2px var(--secondary);
  -webkit-text-fill-color: transparent;
  text-align: right;
  text-decoration: none;
  position: relative;
  z-index: 10;

  position: relative;
  display: inline-block;
  overflow: hidden;

  background: linear-gradient(
    to right,
    var(--secondary),
    var(--secondary) 50%,
    transparent 50%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;

  transition: background-position 800ms ease;

  &:hover {
    cursor: pointer;
    background-position: 0 100%;
  }
`;

function SplashMenu() {
  return (
    <SplashMenuContainer>
      <Link href="#about">
        <MenuItem>About.</MenuItem>
      </Link>
      <Link href="#techstack">
        <MenuItem>Tech Stack.</MenuItem>
      </Link>
      <Link href="#projects">
        <MenuItem>Projects.</MenuItem>
      </Link>
      <Link href="#contact">
        <MenuItem>Contact.</MenuItem>
      </Link>
      <MenuItem>CV.</MenuItem>
    </SplashMenuContainer>
  );
}

export default SplashMenu;
